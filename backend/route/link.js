const express = require("express");

const controller = require("../controller/url.logic");
const userRouter = express.Router();

userRouter.post("/original", controller.generateCustomURL);
userRouter.get("/:shorten", controller.Redirect);

module.exports = {
  userRouter,
};
