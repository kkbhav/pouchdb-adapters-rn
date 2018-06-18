var replication = require('./replication');
var remote = require('./remote-adapter');
var sql = require('./sqlite');

var sqlPlugin;

function rnAdapters (PouchDB) {
  replication(PouchDB);
  remote(PouchDB);
  if (sqlPlugin) {
    sqlPlugin(PouchDB);
  }
}

function createSqlite(SQLite) {
  sqlPlugin = sql(SQLite);
}

module.exports = {
  adapters: rnAdapters,
  createSQLite: createSqlite,
};
