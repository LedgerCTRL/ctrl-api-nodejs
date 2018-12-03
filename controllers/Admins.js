'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.eth_users = function eth_users (req, res, next) {
  Admins.eth_users()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_itembase = function get_itembase (req, res, next) {
  Admins.get_itembase()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_api_key = function new_api_key (req, res, next) {
  Admins.new_api_key()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_itembase = function new_itembase (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Admins.new_itembase(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
