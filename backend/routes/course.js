const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchases", (req, res) => {
  res.send("Hello World!");
});

courseRouter.get("/preview", (req, res) => {
  console.log("hello")
});

module.exports = {
  courseRouter: courseRouter,
};
