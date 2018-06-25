require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))

const { merge, prop, map } = require("ramda")
const pkGen = require("pk-gen.js")

const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCHDB_NAME}`
)

const listPaintings = limit =>
  db
    .allDocs({ include_docs: true, limit })
    .then(response => map(prop("doc"), response.rows))

module.exports = {
  listPaintings
}
