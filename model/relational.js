var database = require('./database.js');
var sql = require('./relational/sql.js');
var bcrypt = require('bcryptjs');
var location = require('./object/location.js');


exports.getConsumer = function(id, callback) {
  if (typeof id !== "undefined") {
    database.getQueryResult(sql.selectConsumerLocation(id), function(err, result) {
      u = null;
      if (result !== undefined && result != null && result.length > 0) {
        l = new location();
        l.idConsumer = result[0].idConsumer;
        l.idLocation = result[0].idLocation;
        l.addressOne = result[0].addressOne;
        l.city = result[0].city;
        l.zipCode = result[0].zipCode;
        console.log(l);
      } else {
        return callback(new Error("id is null"), null);
      }
      return callback(err, l);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};

exports.getDonor = function(id, callback) {
  if (typeof id !== "undefined") {
    database.getQueryResult(sql.selectDonorLocation(id), function(err, result) {
      u = null;
      if (result !== undefined && result != null && result.length > 0) {
        l = new location();
        l.idDonor = result[0].idDonor;
        l.idLocation = result[0].idLocation;
        l.addressOne = result[0].addressOne;
        l.city = result[0].city;
        l.zipCode = result[0].zipCode;
        console.log(l);
      } else {
        return callback(new Error("id is null"), null);
      }
      return callback(err, l);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};

exports.getAgent = function(id, callback) {
  if (typeof id !== "undefined") {
    database.getQueryResult(sql.selectAgentLocation(id), function(err, result) {
      u = null;
      if (result !== undefined && result != null && result.length > 0) {
        l = new location();
        l.idAgent = result[0].idAgent;
        l.idLocation = result[0].idLocation;
        l.addressOne = result[0].addressOne;
        l.city = result[0].city;
        l.zipCode = result[0].zipCode;
        console.log(l);
      } else {
        return callback(new Error("id is null"), null);
      }
      return callback(err, l);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};

exports.getMerchant = function(id, callback) {
  if (typeof id !== "undefined") {
    database.getQueryResult(sql.selectMerchantLocation(id), function(err, result) {
      u = null;
      if (result !== undefined && result != null && result.length > 0) {
        l = new location();
        l.idMerchant = result[0].idMerchant;
        l.idLocation = result[0].idLocation;
        l.addressOne = result[0].addressOne;
        l.city = result[0].city;
        l.zipCode = result[0].zipCode;
        console.log(l);
      } else {
        return callback(new Error("id is null"), null);
      }
      return callback(err, l);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};

exports.getCustomer = function(id, callback) {
  if (typeof id !== "undefined") {
    database.getQueryResult(sql.selectCustomerLocation(id), function(err, result) {
      u = null;
      if (result !== undefined && result != null && result.length > 0) {
        l = new location();
        l.idCustomer = result[0].idCustomer;
        l.idLocation = result[0].idLocation;
        l.addressOne = result[0].addressOne;
        l.city = result[0].city;
        l.zipCode = result[0].zipCode;
        console.log(l);
      } else {
        return callback(new Error("id is null"), null);
      }
      return callback(err, l);
    });
  } else {
    return callback(new Error("typeof name === \"undefined\""), null);
  }
};
