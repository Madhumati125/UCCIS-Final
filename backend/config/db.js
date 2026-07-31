require("dotenv").config();

const mongoose = require("mongoose");
const sqlite3 = require("sqlite3").verbose();
const mysql = require("mysql2");
const mysqlPromise = require("mysql2/promise");
const path = require("path");

// =====================================================
// MONGODB CONNECTION (TASK 26)
// =====================================================

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/uccis",
      {
        serverSelectionTimeoutMS: 5000,
      }
    );

    console.log("======================================");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log("======================================");
  } catch (error) {
    console.log("======================================");
    console.log("MongoDB Connection Failed");
    console.log(error.message);
    console.log("======================================");

    process.exit(1);
  }
};

// =====================================================
// MONGODB CONNECTION (TASK 35)
// NOTE: Task 35's snippet declared its own `connectDB` — same name,
// same job (connecting to the same "uccis" Mongo database) as Task 26's
// `connectDB` already defined above. Since a function can't be declared
// twice under one name, this is renamed to `connectDBTask35` below so
// both are preserved. Its `useNewUrlParser`/`useUnifiedTopology` options
// are kept exactly as given, even though modern Mongoose driver versions
// ignore these (they're deprecated no-ops, not errors). Its own
// `const mongoose = require("mongoose")` call is skipped as redundant,
// since "mongoose" is already required above for Task 26.
// =====================================================

const connectDBTask35 = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/uccis", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ UCCIS MongoDB Connected");
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
    process.exit(1);
  }
};

// =====================================================
// MONGODB CONNECTION (TASK 36)
// NOTE: Task 36's snippet is now a THIRD `connectDB` in this file, same
// name and same job again — connecting to Mongo via `process.env.MONGO_URI`
// (no hardcoded fallback URI this time, unlike Task 26 and Task 35).
// Renamed to `connectDBTask36` below to avoid clobbering the other two.
// Its own `const mongoose = require("mongoose")` call is skipped as
// redundant, since "mongoose" is already required above for Task 26.
//
// At this point there are three near-identical Mongo connect functions
// in one file (connectDB, connectDBTask35, connectDBTask36). None of
// them are called anywhere in this module — whichever one you actually
// invoke at startup (in server.js) is the one that matters; the other
// two just sit here unused. Worth consolidating down to one function,
// happy to do that if you'd like.
// =====================================================

const connectDBTask36 = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database Connected");
  } catch (error) {
    console.error("Database Error:", error.message);
    process.exit(1);
  }
};

// =====================================================
// SQLITE CONNECTION (TASK 23)
// =====================================================

const db = new sqlite3.Database(
  path.join(__dirname, "../database/sqlite/uccis.db"),
  (err) => {
    if (err) {
      console.log("======================================");
      console.log("Task 23 SQLite Connection Error");
      console.log(err.message);
      console.log("======================================");
    } else {
      console.log("======================================");
      console.log("Task 23 SQLite DB Connected");
      console.log("======================================");
    }
  }
);

// =====================================================
// SQLITE CONNECTION (TASK 24)
// =====================================================

const task24DB = new sqlite3.Database(
  path.join(__dirname, "../uccis.db"),
  (err) => {
    if (err) {
      console.log("======================================");
      console.log("Task 24 SQLite Connection Error");
      console.log(err.message);
      console.log("======================================");
    } else {
      console.log("======================================");
      console.log("Task 24 SQLite DB Connected");
      console.log("======================================");
    }
  }
);

// =====================================================
// SQLITE CONNECTION (TASK 25)
// =====================================================

const task25DB = require("./sqlite");

// =====================================================
// MYSQL CONNECTION (TASK 27)
// =====================================================

const mysqlDB = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "madhurohi0331$",
  database: process.env.MYSQL_DATABASE || "uccis",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

mysqlDB.getConnection((err, connection) => {
  if (err) {
    console.log("======================================");
    console.log("Task 27 MySQL Connection Error");
    console.log(err.message);
    console.log("======================================");
  } else {
    console.log("======================================");
    console.log("Task 27 MySQL Connected");
    console.log("======================================");
    connection.release();
  }
});

// =====================================================
// MYSQL CONNECTION (TASK 28)
// =====================================================

const task28DB = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "madhurohi0331$",
  database: process.env.MYSQL_DATABASE || "uccis",
  waitForConnections: true,
  connectionLimit: 10,
});

task28DB.getConnection((err, connection) => {
  if (err) {
    console.log("======================================");
    console.log("Task 28 MySQL Connection Error");
    console.log(err.message);
    console.log("======================================");
  } else {
    console.log("======================================");
    console.log("Task 28 MySQL Connected");
    console.log("======================================");
    connection.release();
  }
});

// =====================================================
// MYSQL CONNECTION (TASK 30 - Promise Pool)
// =====================================================

const task30DB = mysqlPromise.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "madhurohi0331$",
  database: process.env.DB_NAME || "uccis",
  waitForConnections: true,
  connectionLimit: 10,
});

(async () => {
  try {
    const connection = await task30DB.getConnection();

    console.log("======================================");
    console.log("Task 30 MySQL Promise DB Connected");
    console.log("======================================");

    connection.release();
  } catch (err) {
    console.log("======================================");
    console.log("Task 30 MySQL Connection Error");
    console.log(err.message);
    console.log("======================================");
  }
})();

// =====================================================
// MYSQL CONNECTION (TASK 31)
// =====================================================

const task31DB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "madhurohi0331$",
  database: "uccis",
});

task31DB.getConnection((err, connection) => {
  if (err) {
    console.log("======================================");
    console.log("Task 31 MySQL Connection Error");
    console.log(err.message);
    console.log("======================================");
  } else {
    console.log("======================================");
    console.log("Task 31 MySQL Connected");
    console.log("======================================");
    connection.release();
  }
});

// =====================================================
// MYSQL CONNECTION (TASK 32)
// =====================================================

const task32DB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "madhurohi0331$",
  database: "uccis_runtime",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

task32DB.getConnection((err, connection) => {
  if (err) {
    console.log("======================================");
    console.log("Task 32 MySQL Connection Error");
    console.log(err.message);
    console.log("======================================");
  } else {
    console.log("======================================");
    console.log("Task 32 MySQL Connected");
    console.log("======================================");
    connection.release();
  }
});

// =====================================================
// MYSQL CONNECTION (TASK 33 - Command Center Metrics Pool)
// =====================================================

const task33DB = mysqlPromise.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.TASK33_DB_NAME || "uccis_run",

  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,

  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

task33DB.getConnection((err, connection) => {

  if (err) {

    console.error("");
    console.error("❌ Task 33 MySQL Connection Failed");
    console.error(err.message);
    console.error("");

    return;
  }

  console.log("");
  console.log("✅ Task 33 MySQL Connected Successfully");
  console.log(
  `📦 Task 33 Database : ${process.env.TASK33_DB_NAME}`
);
  console.log("");

  connection.release();

});

/*
=====================================================
TASK 33 DATABASE HEALTH CHECK
=====================================================
*/

const checkDatabaseHealthTask33 = async () => {

  try {

    const [rows] = await task33DB.promise().query(`
      SELECT
      DATABASE() AS database_name,
      NOW() AS server_time
    `);

    return {
      success: true,
      status: "CONNECTED",
      database: rows[0].database_name,
      serverTime: rows[0].server_time
    };

  } catch (error) {

    return {
      success: false,
      status: "DISCONNECTED",
      error: error.message
    };

  }

};

/*
=====================================================
TASK 33 DATABASE STATS
=====================================================
*/

const getDatabaseStatsTask33 = async () => {

  try {

    const [[signals]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM signals
    `);

    const [[telemetry]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM telemetry
    `);

    const [[incidents]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM incidents
    `);

    const [[escalations]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM escalations
    `);

    const [[replays]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM replay_events
    `);

    const [[evidence]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM runtime_evidence
    `);

    return {
      success: true,

      signals: signals.count,
      telemetry: telemetry.count,
      incidents: incidents.count,
      escalations: escalations.count,
      replays: replays.count,
      evidence: evidence.count
    };

  } catch (error) {

    return {
      success: false,
      error: error.message
    };

  }

};

/*
=====================================================
TASK 33 COMMAND CENTER METRICS
=====================================================
*/

const getCommandCenterMetricsTask33 = async () => {

  try {

    const [[signalCount]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM signals
    `);

    const [[incidentCount]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM incidents
    `);

    const [[escalationCount]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM escalations
    `);

    const [[replayCount]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM replay_events
    `);

    const [[evidenceCount]] = await task33DB.query(`
      SELECT COUNT(*) count
      FROM runtime_evidence
    `);

    return {

      success: true,

      signalCount: signalCount.count,
      incidentCount: incidentCount.count,
      escalationCount: escalationCount.count,
      replayCount: replayCount.count,
      evidenceCount: evidenceCount.count
    };

  } catch (error) {

    return {
      success: false,
      error: error.message
    };

  }

};

/*
=====================================================
TASK 33 TRACE COUNT
=====================================================
*/

const getTraceCountTask33 = async () => {

  try {

    const [[rows]] = await task33DB.query(`
      SELECT COUNT(DISTINCT trace_id)
      AS totalTraces
      FROM signals
    `);

    return rows.totalTraces;

  } catch (error) {

    return 0;

  }

};

/*
=====================================================
TASK 33 LAST EXECUTION
=====================================================
*/

const getLastExecutionTask33 = async () => {

  try {

    const [rows] = await task33DB.query(`
      SELECT created_at
      FROM signals
      ORDER BY created_at DESC
      LIMIT 1
    `);

    if (!rows.length) {
      return null;
    }

    return rows[0].created_at;

  } catch (error) {

    return null;

  }

};

// Attach the helpers onto task33DB itself, mirroring Task 33's original
// `module.exports.fn = fn` pattern (just off `task33DB` instead of `db`,
// since `db` was already taken by Task 23's SQLite connection).
task33DB.checkDatabaseHealth = checkDatabaseHealthTask33;
task33DB.getDatabaseStats = getDatabaseStatsTask33;
task33DB.getCommandCenterMetrics = getCommandCenterMetricsTask33;
task33DB.getTraceCount = getTraceCountTask33;
task33DB.getLastExecution = getLastExecutionTask33;

/*
=====================================================
TASK 33 GRACEFUL SHUTDOWN
=====================================================
*/

process.on("SIGINT", async () => {

  try {

    console.log("");
    console.log("🔴 Closing Task 33 MySQL Pool...");

    await task33DB.end();

    console.log("✅ Task 33 Pool Closed");

    process.exit(0);

  } catch (error) {

    console.error(error.message);

    process.exit(1);

  }

});

// =====================================================
// MYSQL CONNECTION (TASK 34)
// =====================================================

const env = require("./env");

const task34DB = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

task34DB.getConnection((err, connection) => {
  if (err) {
    console.log("======================================");
    console.log("Task 34 MySQL Connection Error");
    console.log(err.message);
    console.log("======================================");
  } else {
    console.log("======================================");
    console.log("Task 34 MySQL Connected");
    console.log("======================================");
    connection.release();
  }
});

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
  connectDB,
  connectDBTask35,
  connectDBTask36,

  // SQLite
  db,
  task24DB,
  task25DB,

  // MySQL
  mysqlDB: mysqlDB.promise(),
  task28DB: task28DB.promise(),
  task30DB,
  task31DB: task31DB.promise(),
  task32DB: task32DB.promise(),
  task33DB,
  task34DB,
};