const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

adminRouter.post("/signup", (req, res) => {
  res.send("Hello World!");
});

adminRouter.post("/signin", (req, res) => {
  res.send("Hello World!");
});

adminRouter.post("/", (req, res) => {
  res.send("Hello World!");
});

adminRouter.put("/", (req, res) => {
  res.send("Hello World!");
});

adminRouter.get("/bulk", (req, res) => {
  res.send("Hello World!");
});

module.exports = {
  adminRouter: adminRouter,
};
