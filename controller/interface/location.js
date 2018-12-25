/*
 * Name: User.js
 * Date: 2015-07-08
 * Author: Joaquin Osvaldo Rodriguez
 */
var relational = require('../../model/relational.js');
var properties = require('../properties.js');




exports.postIDDonor = function(req, res, next) {
  var id = req.body.idDonor;
  console.log(req.body);
  relational.getDonor(id, function (error, location) {
    if (error) {
      res.end(JSON.stringify(error));
    } else {
      res.end(JSON.stringify(location));
    }
  });
};

exports.postIDAgent = function(req, res, next) {
  var id = req.body.idAgent;
  relational.getAgent(id, function (error, location) {
    if (error) {
      res.end(error);
    } else {
      res.end(JSON.stringify(location));
    }
  });
};

exports.postIDMerchant = function(req, res, next) {
  var id = req.body.idMerchant;
  relational.getMerchant(id, function (error, location) {
    if (error) {
      res.end(error);
    } else {
      res.end(JSON.stringify(location));
    }
  });
};

exports.postIDCustomer = function(req, res, next) {
  var id = req.body.idCustomer;
  relational.getCustomer(id, function (error, location) {
    if (error) {
      res.end(error);
    } else {
      res.end(JSON.stringify(location));
    }
  });
};

exports.postIDConsumer = function(req, res, next) {
  var id = req.body.idConsumer;
  console.log(req.body);
  relational.getConsumer(id, function (error, location) {
    if (error) {
      res.end(JSON.stringify(error));
    } else {
      res.end(JSON.stringify(location));
    }
  });
};
