const mysql = require("mysql");
var db;

if(process.env.JAWSDB_URL){
    db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Bach",
        database: "burgerDB"
    });
};

db.connect(function (err) {
    if(err) throw err;
    console.log("connected as id ", db.threadId);
});

module.exports = db;