var orm = require("../config/orm.js");

var burgers = {
    select: function(cb) {
      orm.select("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(value,cb){
      orm.create("burgers", value, function(res) {
        cb(res);
      });
    },
    update: function(name,id,cb) {
      orm.update("burgers", name, id, function(res) {
        cb(res);
      });
    }
  };
  
module.export = burgers