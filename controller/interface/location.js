/*
 * Name: User.js
 * Date: 2015-07-08
 * Author: Joaquin Osvaldo Rodriguez
 */
var relational = require('../../model/relational.js');
var properties = require('../properties.js');
var http = require('http');

exports.postLocation = function(req, res, next) {
  var location = req.body;
  console.log(location);
  relational.setLocation(location, function (error, boolean) {
    if (error) {
      console.log(error);
      var status = 500;
      res.status(status).end(http.STATUS_CODES[status]);
    } else {
      res.end(JSON.stringify(boolean));
    }
  });
}

exports.postIDLocation = function(req, res, next) {
  var user = req.body;
  relational.getLocation(user, function (error, location) {
    if (error) {
      console.log(error);
      var status = 500;
      res.status(status).end(http.STATUS_CODES[status]);
    } else {
      res.end(JSON.stringify(location));
    }
  });
};
