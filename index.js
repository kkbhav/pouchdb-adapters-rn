import './polyfills';
import PouchDB from 'pouchdb-core';
import mapreduce from 'pouchdb-mapreduce';
import SQLite from 'react-native-sqlite-2';
import remote from './lib/remote-adapter';
import sql from './lib/sqlite';
import replication from './lib/replication';

const SQLiteAdapter = sql(SQLite);

function addAdapter(PouchDB) {
  remote(PouchDB);
  SQLiteAdapter(PouchDB);
}

PouchDB
  .plugin(addAdapter)
  .plugin(mapreduce)
  .plugin(replication)

export default PouchDB;
