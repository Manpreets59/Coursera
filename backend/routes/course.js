const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/courses/purchases", (req, res) => {
  res.send("Hello World!");
});

courseRouter.get("/courses", (req, res) => {
  res.send("Hello World!");
});

module.exports = {
  courseRouter: courseRouter,
};
