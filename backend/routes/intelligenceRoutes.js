const express = require("express");
const router = express.Router();

const { getZoneIntelligence } = require("../controllers/intelligenceController");

// ✅ new API
router.get("/zone/intelligence", getZoneIntelligence);

module.exports = router;