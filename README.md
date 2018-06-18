pouchdb-adapter-rn-http
======

PouchDB adapter for ReactNative using HTTP (e.g. a remote CouchDB or CouchDB-like database) or SQLite as its data store.

### Prerequisites

- [pouchdb-react-native](https://github.com/stockulus/pouchdb-react-native)
- A SQLite module
  - [react-native-sqlite-2 (recommended)](https://github.com/noradaiko/react-native-sqlite-2)
  - [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)
- [react-native-fetch-blob](https://github.com/kkbhav/react-native-fetch-blob)
  
### Usage

```bash
react-native install react-native-sqlite-2
react-native link react-native-sqlite-2
npm install https://github.com/kkbhav/pouchdb-adapters-rn.git --save
npm install --save https://github.com/kkbhav/react-native-fetch-blob.git
react-native link react-native-fetch-blob
```

```js
import PouchDB from 'pouchdb-react-native'
import { createSQLite, adapters } from 'pouchdb-adapter-rn';
import SQLite from 'react-native-sqlite-2';

createSQLite(SQLite);
PouchDB.plugin(adapters);
var db = new PouchDB('mydb', { adapter: 'react-native-sqlite '});
var remote = new PouchDB('http://127.0.0.1:5984/mydb');
```

### Updated API For RemoteDB

1. **All API's calls will return attachment as base64 string or a file-uri**

2. **remote.getAttachment(docId, attachmentId, options, callback)**  
    - extra options values(optional) 
        - path: string, Path to save the file(optional, if not passed base64 string will be returned)  
        - name: name of the file(optional, only used when file parameter is passed)
    
3. **remote.get(docId, options, callback)**  
    - extra options values(optional)  
        - path: string, Path to save the file(optional, if not passed base64 string will be returned)  

### Updated API For LocalDB

1. **All API's calls will return attachment as base64 string or a file-uri**

2. **db.getAttachment(docId, attachmentId, options, callback)**  
    - extra options values(optional) 
        - path: boolean to return attachment as fileUri(optional, if not passed base64 string will be returned)  
    
3. **db.get(docId, options, callback)**  
    - extra options values(optional)  
        - path: boolean to return attachment as fileUri(optional, if not passed base64 string will be returned)
        
4. **db.allDocs(options)**
    - extra options values(optional)
        - path: boolean to return attachment as fileUri(optional, if not passed base64 string will be returned)
        
        
        
  
    

For full API documentation and guides on PouchDB, see [PouchDB.com](http://pouchdb.com/). For details on PouchDB sub-packages, see the [Custom Builds documentation](http://pouchdb.com/custom.html).

