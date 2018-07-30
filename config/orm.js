var connection = require("./connection.js");

var orm = {
  select: function() {
    connection.query("SELECT * FROM burgers", function(err,results) {
      if (err) throw error;
      console.log(results)
    })
  },
  insert: function(data){
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,)", [data] ,function(err,result){
      if (err) throw (err);
      console.log(result)
    })
  },
  update: function(name,id){
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [name,id], function(err,result){
      if (err) throw (err);
      console.log(result)
    })
  }
}



module.exports = orm;