var connection = require("../config/connection.js");

var orm =  {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function(err, result){
            if (err) {
                throw err;
            }
            callback(result); 
        });
    },
    insertOne: function(table, col, val, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [ table, col, val ], function(err, result){
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, col, val, condition, callback) {
        var queryString = `UPDATE ?? SET ??=? WHERE ${condition};`;
        connection.query(queryString, [ table, col, val ], function(err, result){
            if (err) {
                throw err;
            }
            callback(result); 
        });
    }
}

module.exports = orm;