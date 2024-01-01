const express = require("express");

const app = express();

app.use(express.json());

const lessonsController = require("./controllers/lessonsController");

app.get("/lessons", lessonsController.getLessons);

app.post("/lessons", lessonsController.createLesson);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
