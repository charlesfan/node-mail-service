var request = require('request')
  , Step  = require('nodeutil').step
  , cfg = require('./config')
  , auth = cfg.capiInfo.auth
  , capi = require('./capi')
  , xml2json = require('nodeutil').xml2json
  , log = require('nodeutil').logger.getInstance()
  , _ = require('underscore')
  , CAPI = cfg.capiRequestOptions;

exports.getCustomer = function(callback){
  var options = _.clone(CAPI);
  options.path = '/customers';
  options.method = 'GET';
  request(options,function(err, res, data){
    console.log(data);
  });
}

exports.getCustomerById = function(id, callback){
  var options = _.clone(CAPI);
  log.info('Got customer request of CAPI:');
  log.info(options);
  options.url = CAPI.url + '/customers/' + id;
  options.method = 'GET';
  request(options,function(err, res, data){
    if(err) console.log(err);
    if(data) {
      var json = xml2json.toJson(data);
      callback(json);
    } else {
      callback({status:"ERROR",msg:"customer not found of id:" + id});
    }
  });
}

