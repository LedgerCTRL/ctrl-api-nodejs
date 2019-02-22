'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');
var mongoose = require('mongoose');
if (process.env.NODE_ENV == "production")
  var mongoURL = "172.111.66.5"
else
  var mongoURL = "localhost"
mongoose.connect(`mongodb://${mongoURL}/test`);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // connected to mongoDB
  console.log('connected to mongoDB on localhost.');
})
var accountModel = require('../mongo/models/Account');
var accountSchema = new mongoose.Schema(accountModel);
var Account = mongoose.model('Account', accountSchema);
var testAccount = new Account({
  email: "test@email.biz",
  password: "hashahashahashahashahash",
  ethId: "123ETH",
  itembase: "xx_itembase_xx"
});

module.exports.add_inventory = function add_inventory (req, res, next) {
  var inventoryItem = req.swagger.params['inventoryItem'].value;
  var userIndex = req.swagger.params['userIndex'].value;
  var upfile = req.swagger.params['upfile'].value;
  var isPublic = req.swagger.params['isPublic'].value;
  Developers.add_inventory(inventoryItem,userIndex,upfile,isPublic)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eth_user = function eth_user (req, res, next) {
  var userIndex = req.swagger.params['userIndex'].value;
  Developers.eth_user(userIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_file = function get_file (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.get_file(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_item = function get_item (req, res, next) {
  var id = req.swagger.params['id'].value;
  Developers.get_item(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_items = function get_items (req, res, next) {
  var userIndex = req.swagger.params['userIndex'].value;
  Developers.get_items(userIndex)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_scans = function get_scans (req, res, next) {
  var itemhash = req.swagger.params['itemhash'].value;
  Developers.get_scans(itemhash)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_transfers = function get_transfers (req, res, next) {
  var itemhash = req.swagger.params['itemhash'].value;
  Developers.get_transfers(itemhash)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_erc20 = function new_erc20 (req, res, next) {
  var data = req.swagger.params['data'].value;
  Developers.new_erc20(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.new_eth_user = function new_eth_user (req, res, next) {
  var password = req.swagger.params['password'].value;
  Developers.new_eth_user(password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scan_item = function scan_item (req, res, next) {
  var data = req.swagger.params['data'].value;
  Developers.scan_item(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transfer_item = function transfer_item (req, res, next) {
  var request = req.swagger.params['request'].value;
  Developers.transfer_item(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
