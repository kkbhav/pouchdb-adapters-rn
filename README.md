pouchdb-adapter-rn-http
======

PouchDB adapter for ReactNative using HTTP (e.g. a remote CouchDB or CouchDB-like database) as its data store. Designed to run in either Node or the browser. Its adapter name is `'http'` or `'https'` depending on the protocol.

### Usage

```bash
npm install https://github.com/kkbhav/pouchdb-adapter-rn-http.git --save
```

```js
PouchDB.plugin(require('pouchdb-adapter-rn-http'));
var db = new PouchDB('http://127.0.0.1:5984/mydb');
```

For full API documentation and guides on PouchDB, see [PouchDB.com](http://pouchdb.com/). For details on PouchDB sub-packages, see the [Custom Builds documentation](http://pouchdb.com/custom.html).

