var properties = require('../../properties.js');
var location = require('../location.js');

exports.delete = function(router) {
  console.log('service.path.delete()');
};

exports.get = function(router) {
  console.log('service.path.get()');
};

exports.post = function(router) {
  console.log('service.path.post()');
  router.post("/v1/location/id", location.postIDLocation);
  router.post("/v1/location", location.postLocation);
};
