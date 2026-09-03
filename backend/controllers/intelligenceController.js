const { processIntelligence } = require("../services/intelligenceService");

const getZoneIntelligence = (req, res) => {
  const zone_id = Number(req.query.zone_id); // ✅ FIXED

  console.log("Zone ID received:", zone_id);

  const result = processIntelligence(zone_id);

  console.log("OUTPUT:", result); // ✅ DEBUG

  res.json(result);
};

module.exports = { getZoneIntelligence };