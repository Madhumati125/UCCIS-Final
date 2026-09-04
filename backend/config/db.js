require("dotenv").config();

const mongoose = require("mongoose");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// =====================================================
// UCCIS DATABASE CONFIGURATION
// =====================================================
// IMPORTANT:
// This version is SQLITE-FIRST.
// MySQL connections have been completely removed.
//
// Reason:
// The deployed environment does not have a local MySQL
// server running on port 3306.
//
// Previous errors:
//   ECONNREFUSED ::1:3306
//   ECONNREFUSED 127.0.0.1:3306
//
// SQLite is already being used successfully by UCCIS.
// =====================================================


// =====================================================
// HELPER: OPEN SQLITE DATABASE
// =====================================================

function openSQLiteDatabase(dbPath, label) {
  const database = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error("======================================");
      console.error(`${label} Connection Error`);
      console.error(err.message);
      console.error("======================================");
    } else {
      console.log("======================================");
      console.log(`${label} Connected`);
      console.log("======================================");
    }
  });

  return database;
}


// =====================================================
// SQLITE PROMISE QUERY ADAPTER
// =====================================================
// A lot of the older UCCIS modules were written using:
//
//   db.query(...)
//
// which normally belongs to MySQL.
//
// SQLite uses:
//
//   db.all(...)
//   db.get(...)
//   db.run(...)
//
// This adapter provides a MySQL-like query() method so
// the existing routes can continue working without MySQL.
// =====================================================

function attachQueryAPI(database) {
  database.query = function (sql, params = [], callback) {
    if (typeof params === "function") {
      callback = params;
      params = [];
    }

    const promise = new Promise((resolve, reject) => {
      const normalizedSQL = String(sql).trim().toLowerCase();

      // -------------------------------------------------
      // Handle SELECT queries
      // -------------------------------------------------
      if (
        normalizedSQL.startsWith("select") ||
        normalizedSQL.startsWith("pragma") ||
        normalizedSQL.startsWith("with")
      ) {
        database.all(sql, params, (err, rows) => {
          if (err) {
            if (callback) {
              callback(err);
              return;
            }

            reject(err);
            return;
          }

          const result = [rows || [], []];

          if (callback) {
            callback(null, result);
          }

          resolve(result);
        });

        return;
      }

      // -------------------------------------------------
      // Handle INSERT / UPDATE / DELETE / CREATE
      // -------------------------------------------------
      database.run(sql, params, function (err) {
        if (err) {
          if (callback) {
            callback(err);
            return;
          }

          reject(err);
          return;
        }

        const result = [
          {
            affectedRows: this.changes || 0,
            insertId: this.lastID || 0,
            changes: this.changes || 0
          },
          []
        ];

        if (callback) {
          callback(null, result);
        }

        resolve(result);
      });
    });

    return promise;
  };


  // ---------------------------------------------------
  // MySQL-compatible promise() method
  // ---------------------------------------------------

  database.promise = function () {
    return {
      query: async function (sql, params = []) {
        return database.query(sql, params);
      },

      execute: async function (sql, params = []) {
        return database.query(sql, params);
      },

      getConnection: async function () {
        return {
          query: database.query.bind(database),

          execute: database.query.bind(database),

          release: function () {
            // SQLite does not need connection release.
          }
        };
      }
    };
  };


  // ---------------------------------------------------
  // MySQL-style getConnection()
  // ---------------------------------------------------

  database.getConnection = function (callback) {
    const connection = {
      query: database.query.bind(database),

      execute: database.query.bind(database),

      release: function () {
        // No-op for SQLite.
      }
    };

    if (typeof callback === "function") {
      process.nextTick(() => {
        callback(null, connection);
      });
    }

    return Promise.resolve(connection);
  };


  return database;
}


// =====================================================
// SQLITE DATABASE PATHS
// =====================================================

// Task 23 database
const task23DatabasePath = path.join(
  __dirname,
  "../database/sqlite/uccis.db"
);


// Task 24 database
const task24DatabasePath = path.join(
  __dirname,
  "../uccis.db"
);


// =====================================================
// TASK 23 SQLITE DATABASE
// =====================================================

const db = attachQueryAPI(
  openSQLiteDatabase(
    task23DatabasePath,
    "Task 23 SQLite DB"
  )
);


// =====================================================
// TASK 24 SQLITE DATABASE
// =====================================================

const task24DB = attachQueryAPI(
  openSQLiteDatabase(
    task24DatabasePath,
    "Task 24 SQLite DB"
  )
);


// =====================================================
// TASK 25 SQLITE DATABASE
// =====================================================

let task25DB;

try {
  task25DB = require("./sqlite");

  // If Task 25's database does not have the
  // compatibility query API, attach it.
  if (task25DB && typeof task25DB.query !== "function") {
    attachQueryAPI(task25DB);
  }

} catch (error) {
  console.error("Task 25 SQLite initialization error:");
  console.error(error.message);

  // Fallback to Task 24 database.
  task25DB = task24DB;
}


// =====================================================
// SQLITE DATABASE INITIALIZATION
// =====================================================

function initializeSQLiteDatabase(database, label) {
  if (!database) {
    return;
  }

  database.serialize(() => {

    // -------------------------------------------------
    // Core tables
    // -------------------------------------------------

    database.run(`
      CREATE TABLE IF NOT EXISTS signals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        signal_id TEXT,
        signal_type TEXT,
        location_id TEXT,
        trace_id TEXT,
        status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS telemetry (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        signal_id TEXT,
        type TEXT,
        value REAL,
        status TEXT,
        timestamp TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS telemetry_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        event_id TEXT,
        signal_id TEXT,
        event_status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS incidents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        incident_id TEXT,
        event_id TEXT,
        title TEXT,
        severity TEXT,
        status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS escalations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        escalation_id TEXT,
        incident_id TEXT,
        escalated_to TEXT,
        status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS decisions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        decision_id TEXT,
        escalation_id TEXT,
        decision_text TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS approvals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        approval_id TEXT,
        decision_id TEXT,
        approved_by TEXT,
        status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS replay_sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        replay_id TEXT,
        incident_id TEXT,
        replay_result TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS replay_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        replay_id TEXT,
        event TEXT,
        severity TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS runtime_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        replay_id TEXT,
        module TEXT,
        log_message TEXT,
        level TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS runtime_evidence (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        trace_id TEXT,
        evidence TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS locations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location_id TEXT,
        district TEXT,
        state TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS operators (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        operator_id TEXT,
        name TEXT,
        status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS alerts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        severity TEXT,
        status TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS recommendations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recommendation TEXT,
        priority TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    database.run(`
      CREATE TABLE IF NOT EXISTS runtimes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        service_name TEXT,
        status TEXT,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log(`${label}: schema ready`);
  });
}


// Initialize both SQLite databases.

initializeSQLiteDatabase(
  db,
  "Task 23 SQLite"
);

initializeSQLiteDatabase(
  task24DB,
  "Task 24 SQLite"
);


// =====================================================
// MONGODB CONNECTION
// =====================================================
// MongoDB is retained because Tasks 15/26/35/36 use
// Mongoose.
//
// IMPORTANT:
// It is NOT automatically connected here.
//
// server.js controls when MongoDB is connected.
// =====================================================

const connectDB = async () => {

  const mongoUri =
    process.env.MONGO_URI ||
    "mongodb://127.0.0.1:27017/uccis";

  try {

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    const conn = await mongoose.connect(
      mongoUri,
      {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10
      }
    );

    console.log("======================================");
    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
    console.log("======================================");

    return conn;

  } catch (error) {

    console.log("======================================");
    console.log("MongoDB Connection Failed");
    console.log(error.message);
    console.log("======================================");

    throw error;
  }
};


// =====================================================
// TASK 35 MONGODB CONNECTION
// =====================================================

const connectDBTask35 = async () => {

  const mongoUri =
    process.env.MONGO_URI ||
    "mongodb://127.0.0.1:27017/uccis";

  try {

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    const conn = await mongoose.connect(
      mongoUri,
      {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10
      }
    );

    console.log("✅ UCCIS MongoDB Connected");

    return conn;

  } catch (err) {

    console.error(
      "DB Connection Failed:",
      err.message
    );

    throw err;
  }
};


// =====================================================
// TASK 36 MONGODB CONNECTION
// =====================================================

const connectDBTask36 = async () => {

  const mongoUri =
    process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "MONGO_URI is not configured"
    );
  }

  try {

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    const conn = await mongoose.connect(
      mongoUri,
      {
        serverSelectionTimeoutMS: 10000,
        maxPoolSize: 10
      }
    );

    console.log("Database Connected");

    return conn;

  } catch (error) {

    console.error(
      "Database Error:",
      error.message
    );

    throw error;
  }
};


// =====================================================
// SQLITE COMPATIBILITY DATABASE FACTORY
// =====================================================
// These replace the old MySQL pools.
//
// BEFORE:
//
// mysql.createPool(... localhost:3306 ...)
//
// NOW:
//
// SQLite database with a MySQL-compatible query API.
//
// This means existing UCCIS routes can continue calling:
//
//   db.query(...)
//
//   db.promise().query(...)
//
//   db.getConnection(...)
//
// without starting MySQL.
// =====================================================

function createSQLiteCompatibilityDB(sourceDB) {

  if (!sourceDB) {
    return null;
  }

  return sourceDB;
}


// =====================================================
// TASK 27 DATABASE
// =====================================================

const mysqlDB = createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 28 DATABASE
// =====================================================

const task28DB =
  createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 30 DATABASE
// =====================================================

const task30DB =
  createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 31 DATABASE
// =====================================================

const task31DB =
  createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 32 DATABASE
// =====================================================

const task32DB =
  createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 33 DATABASE
// =====================================================

const task33DB =
  createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 34 DATABASE
// =====================================================

const task34DB =
  createSQLiteCompatibilityDB(db);


// =====================================================
// TASK 33 DATABASE HEALTH
// =====================================================

const checkDatabaseHealthTask33 = async () => {

  try {

    await task33DB.query(
      "SELECT datetime('now') AS server_time"
    );

    return {
      success: true,
      status: "CONNECTED",
      database: "SQLite",
      serverTime: new Date().toISOString()
    };

  } catch (error) {

    return {
      success: false,
      status: "DISCONNECTED",
      database: "SQLite",
      error: error.message
    };
  }
};


// =====================================================
// TASK 33 DATABASE STATS
// =====================================================

const getDatabaseStatsTask33 = async () => {

  try {

    const [
      [signals]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM signals
    `);

    const [
      [telemetry]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM telemetry
    `);

    const [
      [incidents]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM incidents
    `);

    const [
      [escalations]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM escalations
    `);

    const [
      [replays]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM replay_events
    `);

    const [
      [evidence]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM runtime_evidence
    `);

    return {

      success: true,

      database: "SQLite",

      signals:
        signals?.count || 0,

      telemetry:
        telemetry?.count || 0,

      incidents:
        incidents?.count || 0,

      escalations:
        escalations?.count || 0,

      replays:
        replays?.count || 0,

      evidence:
        evidence?.count || 0
    };

  } catch (error) {

    return {
      success: false,
      database: "SQLite",
      error: error.message
    };
  }
};


// =====================================================
// TASK 33 COMMAND CENTER METRICS
// =====================================================

const getCommandCenterMetricsTask33 = async () => {

  try {

    const [
      [signalCount]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM signals
    `);

    const [
      [incidentCount]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM incidents
    `);

    const [
      [escalationCount]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM escalations
    `);

    const [
      [replayCount]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM replay_events
    `);

    const [
      [evidenceCount]
    ] = await task33DB.query(`
      SELECT COUNT(*) AS count
      FROM runtime_evidence
    `);

    return {

      success: true,

      database: "SQLite",

      signalCount:
        signalCount?.count || 0,

      incidentCount:
        incidentCount?.count || 0,

      escalationCount:
        escalationCount?.count || 0,

      replayCount:
        replayCount?.count || 0,

      evidenceCount:
        evidenceCount?.count || 0
    };

  } catch (error) {

    return {
      success: false,
      database: "SQLite",
      error: error.message
    };
  }
};


// =====================================================
// TASK 33 TRACE COUNT
// =====================================================

const getTraceCountTask33 = async () => {

  try {

    const [
      [rows]
    ] = await task33DB.query(`
      SELECT COUNT(DISTINCT trace_id) AS totalTraces
      FROM signals
      WHERE trace_id IS NOT NULL
    `);

    return rows?.totalTraces || 0;

  } catch (error) {

    return 0;
  }
};


// =====================================================
// TASK 33 LAST EXECUTION
// =====================================================

const getLastExecutionTask33 = async () => {

  try {

    const [
      rows
    ] = await task33DB.query(`
      SELECT created_at
      FROM signals
      ORDER BY created_at DESC
      LIMIT 1
    `);

    if (!rows || !rows.length) {
      return null;
    }

    return rows[0].created_at;

  } catch (error) {

    return null;
  }
};


// =====================================================
// ATTACH TASK 33 HELPERS
// =====================================================

if (task33DB) {

  task33DB.checkDatabaseHealth =
    checkDatabaseHealthTask33;

  task33DB.getDatabaseStats =
    getDatabaseStatsTask33;

  task33DB.getCommandCenterMetrics =
    getCommandCenterMetricsTask33;

  task33DB.getTraceCount =
    getTraceCountTask33;

  task33DB.getLastExecution =
    getLastExecutionTask33;
}


// =====================================================
// TASK 33 GRACEFUL SHUTDOWN
// =====================================================

process.on("SIGINT", async () => {

  try {

    console.log("");
    console.log(
      "🔴 Closing UCCIS SQLite databases..."
    );

    const closeDatabase = (database) => {

      return new Promise((resolve) => {

        if (!database) {
          resolve();
          return;
        }

        database.close(() => {
          resolve();
        });
      });
    };

    await closeDatabase(db);

    if (
      task24DB &&
      task24DB !== db
    ) {
      await closeDatabase(task24DB);
    }

    console.log(
      "✅ SQLite databases closed"
    );

    process.exit(0);

  } catch (error) {

    console.error(
      "SQLite shutdown error:",
      error.message
    );

    process.exit(1);
  }
});


// =====================================================
// EXPORTS
// =====================================================

module.exports = {

  // ---------------------------------------------------
  // MongoDB
  // ---------------------------------------------------

  connectDB,
  connectDBTask35,
  connectDBTask36,

  // ---------------------------------------------------
  // SQLite
  // ---------------------------------------------------

  db,
  task24DB,
  task25DB,

  // ---------------------------------------------------
  // SQLite-compatible replacements
  // ---------------------------------------------------

  mysqlDB,
  task28DB,
  task30DB,
  task31DB,
  task32DB,
  task33DB,
  task34DB
};