const express = require("express");

const app = express();

console.log(__dirname);

const lessonsController = require("./controllers/lessonsController");

app.get("/lessons", lessonsController.getLessons);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
