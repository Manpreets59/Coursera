const { Router } = require("express");
const adminRouter = Router();


adminRouter.post("/signup", (req, res) => {
  res.send("Hello World!");
});

adminRouter.post("//signin", (req, res) => {
  res.send("Hello World!");
});

adminRouter.post("/course", (req, res) => {
  res.send("Hello World!");
});

userRouter.put("/course", (req, res) => {
  res.send("Hello World!");
});

userRouter.get("/course/bulk", (req, res) => {
  res.send("Hello World!");
});

module.exports = {
  adminRouter: this.adminRouter
}