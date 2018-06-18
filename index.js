import PouchDB from 'pouchdb-core'
import mapreduce from 'pouchdb-mapreduce'
import SQLite from 'react-native-sqlite-2'
import replication from './lib/replication'
import remote from './lib/remote-adapter'
import sql from './lib/sqlite'

const SQLiteAdapter = sql(SQLite)

PouchDB
  .plugin(SQLiteAdapter)
  .plugin(remote)
  .plugin(mapreduce)
  .plugin(replication)

export default PouchDB
