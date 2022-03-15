const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { hashPassword, decryptPassword, checkToken } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);//HTTP Verbs can only have associated path
userRouter.post("/login", decryptPassword, login);
userRouter.get("/user", checkToken, login);

module.exports = userRouter;