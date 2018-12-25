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

  router.post("/v1/location/donor/id", location.postIDDonor);
  router.post("/v1/location/consumer/id", location.postIDConsumer);
  router.post("/v1/location/merchant/id", location.postIDMerchant);
  router.post("/v1/location/customer/id", location.postIDCustomer);
  router.post("/v1/location/agent/id", location.postIDAgent);
};
