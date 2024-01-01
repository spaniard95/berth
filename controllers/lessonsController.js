const db = require("../db");

const getLessons = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM lessons");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getLessons,
};
