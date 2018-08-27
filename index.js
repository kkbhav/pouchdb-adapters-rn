import SQLite from 'react-native-sqlite-2';
import remote from './lib/remote-adapter';
import sql from './lib/sqlite';

const SQLiteAdapter = sql(SQLite);

function addAdapter(PouchDB) {
  remote(PouchDB);
  SQLiteAdapter(PouchDB);
}

export default addAdapter;
