require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))

const { merge, prop, map } = require("ramda")
const pkGen = require("./lib/pk-gen")

const db = new PouchDB(
  `${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)

const getPainting = (paintings, callback) => db.get(paintings, callback)

const listPaintings = limit =>
  db
    .allDocs({ include_docs: true, limit })
    .then(response => map(prop("doc"), response.rows))

module.exports = {
  listPaintings,
  getPainting
}
