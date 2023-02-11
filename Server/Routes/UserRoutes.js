const express = require("express")
const Router = express.Router();
const { newRegister, getUser, getAdmin } = require("../Controller/userController");

Router.route("/register").post(newRegister);
Router.route("/login").post(getUser);
Router.route("/admin/login").post(getAdmin);

module.exports = Router;