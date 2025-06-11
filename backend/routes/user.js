const { Router } = require("express");

const userRouter = Router();

userRouter.post("/user/signup", (req, res) => {
  res.send("Hello World!");
});

userRouter.post("/user/signin", (req, res) => {
  res.send("Hello World!");
});

userRouter.get("/user/purchases", (req, res) => {
  res.send("Hello World!");
});

module.exports = {
  userRouter: userRouter,
};
