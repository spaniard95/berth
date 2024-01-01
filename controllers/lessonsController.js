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

const createLesson = async (req, res) => {
  try {
    const { title, category } = req.body;
    const result = await db.query(
      "INSERT INTO lessons (title, category) VALUES ($1, $2) RETURNING *",
      [title, category]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getLessons,
  createLesson,
};
