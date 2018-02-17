// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// This is an object that is exported to the burgers_controller.js
// file. It calls the functions from the orm.js file to access
// the data in the burgers_db database.
var burger = {
    selectAll: function(callback){
      orm.selectAll(function(data){
        callback(data);
      });
    },
    insertOne: function(burger_name, callback){
      orm.insertOne(burger_name, function(data){
        callback(data);
      });
    },
    updateOne: function(id, callback){
      orm.updateOne(id, function(data){
        callback(data);
      });
    },
    deleteOne: function(id, callback){
      orm.deleteOne(id, function(data){
        callback(data);
      });
    }
}

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;

