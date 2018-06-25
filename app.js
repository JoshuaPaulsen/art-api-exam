require("dotenv").config()
const express = require("express")
const api = express("express")
const port = process.env.PORT || 5000
const bodyParser = require("body-parser")
const NodeHTTPError = require("node-http-error")
const { propOr, isEmpty, compose, not, join, pathOr } = require("ramda")
const requiredFieldsChecker = require("./lib/required-fields-checker")

//const { } = require("./dal")

api.use(bodyParser.json())

api.get("/", function(req, res, next) {
  res.send("Welcome to the Art API. Manage all the paintings.")
})

// STEP 2
api.post("/paitings", function(req, res, next) {
  const newPainting = propOr({}, "body", req)
  if (err) {
    next(
      new NodeHTTPError(
        400,
        "You dropped a paint brush, make sure you add a painting to the request body.  Ensure the Content-Type is application/json."
      )
    )
  }
  const missingFields = requiredFieldsChecker(
    ["name", "movement", "artist", "yearCreated", "musem"],
    newPainting
  )
  const sendMissingFieldsError = compose(
    not,
    isEmpty
  )(missingFields)

  if (sendMissingFieldsError) {
    next(
      new NodeHTTPError(
        400,
        "Sorry, you didnt pass the required fields check reffer to the documentation and try again."
      )
    )
  }

  addPainting(newPainting, function(err, result) {
    if (err) {
      next(new NodeHTTPError(err.status, err.message, { ...err, author: "jp" }))
    }
    res.status(201).send(results)
  })
})

api.get("/paintings/", function(req, res, next) {
  const filteredlimit = Number(pathOr(5, ["query", "limit"], req))
  listBoards(filteredlimit)
    .then(paintings => res.status(200).send(paintings))
    .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
})

api.listen(port, () => console.log("Art API is up!", port))
