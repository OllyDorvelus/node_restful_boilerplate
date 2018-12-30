const express = require("express");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  // insert routes here
  app.use(error);
};
