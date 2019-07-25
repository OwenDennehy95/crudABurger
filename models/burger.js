const db = require("../config/connections.js");

const burger = {
    all: function(cb){
            var queryString = `SELECT * FROM burgers`;
            db.query(queryString, function (err, result) {
                if(err) throw err;

                cb(result);
            });
            
    },
    create: function(burger_name, cb){
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, "false")`
        db.query(queryString, burger_name, function (err, result) {
            if(err) throw err;
            cb(result)
        })
    }


};

module.exports = burger;