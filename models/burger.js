var orm = require("../config/orm.js");
//var mysql = require("mysql");// WHAT 
var burgers = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (res) {
      callback(res);
    });
  },
  insertOne: function (cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function (res) {
      callback(res);
    });
  },
  updateOne: function (objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      callback(res);
    });
  },
  delete: function (condition, callback) {
    orm.delete("burgers", condition, function (res) {
      callback(res);
    });
  }
};
module.exports = burgers;