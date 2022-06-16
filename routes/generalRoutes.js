const express = require("express");
const path = require("path");

const routes = express.Router();

routes.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "homepage.html"));
});

routes.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "about.html"));
});

routes.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

routes.get("/home", (req, res, next) => {
  res.redirect("/")
});

module.exports = routes;
