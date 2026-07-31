export const phaseData = {
  "Phase 1": {
    title: "Database Engineering",
    cards: {
      Tables: 10,
      ForeignKeys: 15,
      Indexes: 22,
      Migrations: 8
    },
    barData: [
      { name: "Tables", value: 10 },
      { name: "FK", value: 15 },
      { name: "Indexes", value: 22 },
      { name: "Migrations", value: 8 }
    ],
    pieData: [
      { name: "Completed", value: 90 },
      { name: "Pending", value: 10 }
    ],
    backend: {
      schema: "Loaded",
      migrations: "Success",
      seeders: "Success"
    }
  },

  "Phase 2": {
    title: "Relationship Validation",
    cards: {
      Joins: 18,
      Records: 250,
      Checks: 40,
      Relations: 15
    },
    barData: [
      { name: "Joins", value: 18 },
      { name: "Records", value: 250 },
      { name: "Checks", value: 40 }
    ],
    pieData: [
      { name: "Valid", value: 95 },
      { name: "Failed", value: 5 }
    ],
    backend: {
      status: "Validated"
    }
  },

  "Phase 3": {
    title: "Runtime Engine",
    cards: {
      Signals: 13,
      Telemetry: 13,
      Incidents: 11,
      Logs: 22
    },
    barData: [
      { name: "Signals", value: 13 },
      { name: "Telemetry", value: 13 },
      { name: "Incidents", value: 11 },
      { name: "Logs", value: 22 }
    ],
    pieData: [
      { name: "Processed", value: 85 },
      { name: "Pending", value: 15 }
    ],
    backend: {
      runtime: "Active"
    }
  },

  "Phase 4": {
    title: "TTG Dataset",
    cards: {
      Flood: 5,
      Traffic: 5,
      Medical: 5,
      Cyber: 5
    },
    barData: [
      { name: "Flood", value: 5 },
      { name: "Traffic", value: 5 },
      { name: "Medical", value: 5 },
      { name: "Cyber", value: 5 }
    ],
    pieData: [
      { name: "Available", value: 100 }
    ],
    backend: {
      dataset: "Loaded"
    }
  },

  "Phase 5": {
    title: "Master DB Validation",
    cards: {
      Entities: 12,
      Reviews: 8,
      Corrections: 7,
      Approved: 10
    },
    barData: [
      { name: "Entities", value: 12 },
      { name: "Reviews", value: 8 },
      { name: "Corrections", value: 7 }
    ],
    pieData: [
      { name: "Approved", value: 80 },
      { name: "Pending", value: 20 }
    ],
    backend: {
      validation: "Passed"
    }
  },

  "Phase 6": {
    title: "Demo Chain",
    cards: {
      Signals: 10,
      Replays: 10,
      Decisions: 10,
      Logs: 10
    },
    barData: [
      { name: "Signals", value: 10 },
      { name: "Replays", value: 10 },
      { name: "Logs", value: 10 }
    ],
    pieData: [
      { name: "Verified", value: 100 }
    ],
    backend: {
      chain: "Verified"
    }
  },

  "Phase 7": {
    title: "Runtime Proof",
    cards: {
      Requests: 50,
      Responses: 50,
      Logs: 100,
      Evidence: 75
    },
    barData: [
      { name: "Requests", value: 50 },
      { name: "Responses", value: 50 },
      { name: "Logs", value: 100 }
    ],
    pieData: [
      { name: "Complete", value: 95 },
      { name: "Missing", value: 5 }
    ],
    backend: {
      proof: "Available"
    }
  }
};