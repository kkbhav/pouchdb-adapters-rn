'use strict';

import PouchDB from 'pouchdb-core';
import mapreduce from 'pouchdb-mapreduce';
import SQLite from 'react-native-sqlite-2';
import remote from './lib/remote-adapter';
import replication from './lib/replication';
import sql from './lib/sqlite';

function addAdapter(PDB) {
  const SQLiteAdapter = sql(SQLite);
  remote(PDB);
  SQLiteAdapter(PDB);
  replication(PDB);
}

PouchDB.plugin(addAdapter).plugin(mapreduce);

export default PouchDB;
