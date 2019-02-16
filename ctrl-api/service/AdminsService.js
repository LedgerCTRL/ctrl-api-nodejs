'use strict';


/**
 * get list of ETH accounts
 *
 * no response value expected for this operation
 **/
exports.eth_users = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * fetches itembase address
 *
 * no response value expected for this operation
 **/
exports.get_itembase = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * creates new api key
 *
 * returns String
 **/
exports.new_api_key = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * creates new itembase contract
 * creates new itembase contract using userId in POST data
 *
 * userId UserId user responsible for creating itembase (optional)
 * no response value expected for this operation
 **/
exports.new_itembase = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

