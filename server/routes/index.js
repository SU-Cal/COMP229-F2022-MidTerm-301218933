/* File: index.js
Name: Calum Bashow
Student ID# 301218933
App: COMP229-F2022-MidTerm-301218933
*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the  model
let product = require("../models/products");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    products: "",
  });
});

module.exports = router;
