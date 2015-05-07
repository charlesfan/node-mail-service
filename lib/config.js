var util = require('util');
var mapi_username = process.env.MAPI_USER;
var mapi_password = process.env.MAPI_PASSWD;
var capi_username = process.env.CAPI_USER;
var capi_password = process.env.CAPI_PASSWD;

exports.serverinfo={
  ip_address:process.env.THIS_SERVER
}

exports.cnodeindo={
  host : '',
  port : 3000,
  path:'/snapshot/:uuid/:snapname/:disk',
  method:'POST'
};

exports.mapiInfo = {
  auth : 'Basic ' + new Buffer(mapi_username + ':' + mapi_password).toString('base64')
};
exports.base_mapi_auth = this.mapiInfo.auth;

exports.capiInfo = {
  auth : 'Basic ' + new Buffer(capi_username + ':' + capi_password).toString('base64')
};
exports.base_capi_auth = this.capiInfo.auth;

exports.mapiRequestOptions = {
  host : process.env.MAPI_HOST,
  port : process.env.MAPI_PORT,
  headers: {"Authorization": this.mapiInfo.auth}
};

exports.capiRequestOptions = {
  url : 'http://' +process.env.CAPI_HOST + ':' + process.env.CAPI_PORT,
  headers: {"Authorization": this.capiInfo.auth}
};

exports.reqOpts4Mapi = {
  url: "http://"+process.env.MAPI_HOST + ":" + process.env.MAPI_PORT,
  headers: {"Authorization": this.mapiInfo.auth}
}

exports.getHostServerCnode = function(serverUtl){
  return util.format("http://%s:3000",serverUtl);
}
