require("dotenv").config()
const express = require("express")
const api = express("express")
const port = process.env.PORT || 5000
const bodyParser = require("body-parser")
const NodeHTTPError = require("node-http-error")
const {} = require("ramda")
const requiredFieldsChecker =
  //const { } = require("./dal")

  api.use(bodyParser.json())

api.get("/", function(req, res, next) {
  res.send("Welcome to the Art API. Manage all the paintings.")
})
