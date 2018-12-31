var database = require('./database.js');
var sql = require('./relational/sql.js');
var bcrypt = require('bcryptjs');
var location = require('./object/location.js');


exports.setLocation = function(location, callback) {
  if (typeof location !== "undefined") {
    database.getQueryResult(sql.insertLocation(location), function(err, result, fields) {
      if (err) {
        callback(err, null);
      }
      callback(null, true);
    });
  } else {
    callback(new Error("typeof user === \"undefined\""), null);
  }
};

exports.getLocation = function(user, callback) {
  if (typeof user !== "undefined") {
    database.getQueryResult(sql.selectLocation(user), function(err, result) {
      var l = null;
      if (result !== undefined && result != null && result.length > 0) {
        l = new location();
        l.idUser = result[0].idUser;
        l.idAgent = result[0].idAgent;
        l.idMerchant = result[0].idMerchant;
        l.idConsumer = result[0].idConsumer;
        l.idCustomer = result[0].idCustomer;
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
