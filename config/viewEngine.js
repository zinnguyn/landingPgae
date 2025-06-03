const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  const viewsPath = path.join(__dirname, "../views");
  const publicPath = path.join(__dirname, "../publics");

  console.log("Views path:", viewsPath);
  console.log("Static path:", publicPath);

  app.set("views", viewsPath);
  app.set("view engine", "ejs");

  app.use(express.static(publicPath));
};

module.exports = configViewEngine;
