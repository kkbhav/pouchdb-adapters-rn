export default class RNFetchBlobFetchResponse {

  constructor(resp) {
    let info = resp.info();
    this.headers = info.headers;
    this.ok = info.status >= 200 && info.status <= 299,
      this.status = info.status;
    this.type = 'basic';
    this.bodyUsed = false;
    this.resp = resp;
    this.rnfbRespInfo = info;
    this.rnfbResp = resp;
  }

  rawResp() {
    return Promise.resolve(this.rnfbResp);
  }

  arrayBuffer() {
    this.bodyUsed = true;
    return readArrayBuffer(this.rnfbResp, this.rnfbRespInfo);
  }

  text() {
    this.bodyUsed = true;
    return readText(this.rnfbResp, this.rnfbRespInfo);
  }

  json() {
    this.bodyUsed = true;
    return readJSON(this.rnfbResp, this.rnfbRespInfo);
  }

  blob() {
    this.bodyUsed = true;
    return readBlob(this.rnfbResp, this.rnfbRespInfo);
  }
}

/**
 * Get response data as array.
 * @param  {FetchBlobResponse} resp Response data object from RNFB fetch call.
 * @param  {RNFetchBlobResponseInfo} info Response informations.
 * @return {Promise<Array>}
 */
function readArrayBuffer(resp, info) {
  switch (info.rnfbEncode) {
    case 'path':
      return resp.readFile('ascii');
  }
  let buffer = [];
  let str = resp.text();
  for (let i in str) {
    buffer[i] = str.charCodeAt(i);
  }
  return Promise.resolve(buffer);
}

/**
 * Get response data as string.
 * @param  {FetchBlobResponse} resp Response data object from RNFB fetch call.
 * @param  {RNFetchBlobResponseInfo} info Response informations.
 * @return {Promise<string>}
 */
function readText(resp, info) {
  switch (info.rnfbEncode) {
    case 'base64':
      return Promise.resolve(resp.text());
    case 'path':
      return resp.text();
    default:
      return Promise.resolve(resp.text());
  }
}


/**
 * Get response data as RNFetchBlob Blob polyfill object.
 * @param  {FetchBlobResponse} resp Response data object from RNFB fetch call.
 * @param  {RNFetchBlobResponseInfo} info Response informations.
 * @return {Promise<Blob>}
 */
function readBlob(resp) {
  return resp.blob();
}

/**
 * Get response data as JSON object.
 * @param  {FetchBlobResponse} resp Response data object from RNFB fetch call.
 * @param  {RNFetchBlobResponseInfo} info Response informations.
 * @return {Promise<object>}
 */
function readJSON(resp, info) {
  switch (info.rnfbEncode) {
    case 'base64':
      return Promise.resolve(resp.json());
    case 'path':
      return resp.json();
    default:
      return Promise.resolve(resp.json());
  }
}
