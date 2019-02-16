'use strict';


/**
 * adds an inventory item
 * Adds an item to the system
 *
 * inventoryItem String JSON-encoded item detail
 * userIndex Integer User's ETH index
 * upfile File The file to upload (optional)
 * isPublic Boolean boolean flag to make item public (optional)
 * no response value expected for this operation
 **/
exports.add_inventory = function(inventoryItem,userIndex,upfile,isPublic) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * fetch single ETH account by index
 *
 * userIndex String unique user ID
 * no response value expected for this operation
 **/
exports.eth_user = function(userIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * fetches file associated with item ID
 * fetches file associated with item ID
 *
 * id String unique item ID
 * no response value expected for this operation
 **/
exports.get_file = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * fetches individual item by id
 * fetches individual item by id
 *
 * id String unique item ID
 * returns InventoryItem
 **/
exports.get_item = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Widget Adapter",
  "sn" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "userid" : "0xcb39f9322b21150833303453ec20aabef0817f90"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * fetches all items associated with user ID
 * fetches all items associated with user ID
 *
 * userIndex Integer unique user ID
 * no response value expected for this operation
 **/
exports.get_items = function(userIndex) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * fetches item tag scans
 * fetches scans by item hash
 *
 * itemhash String unique item ID
 * returns String
 **/
exports.get_scans = function(itemhash) {
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
 * get transfer history of given item
 *
 * itemhash String unique item ID
 * no response value expected for this operation
 **/
exports.get_transfers = function(itemhash) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * creates new erc20 contract
 * creates new erc20 contract using userId in POST data
 *
 * data Data userId and name of token in JSON (optional)
 * no response value expected for this operation
 **/
exports.new_erc20 = function(data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * create new ETH account
 *
 * password Password  (optional)
 * no response value expected for this operation
 **/
exports.new_eth_user = function(password) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * logs item scan on-chain
 *
 * data Scan data about the scan (optional)
 * no response value expected for this operation
 **/
exports.scan_item = function(data) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * transfers item to new owner
 *
 * request Request data required to transfer item (optional)
 * no response value expected for this operation
 **/
exports.transfer_item = function(request) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

