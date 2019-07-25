const router = require("express").Router();
const db = require("../config/connections.js");

router.get("/", function(req, res) {
  var queryString = `SELECT * FROM burgers`;
  db.query(queryString, function(err, result) {
    if (err) throw err;
    res.render("index", { burgerDB: result });
  });
});

router.post("/api/burger/:burger_name", function(req, res) {
  var queryString =
    "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
  db.query(queryString, req.params.burger_name, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.put("/api/burger/:id", function(req, res) {
  var queryString =
    "UPDATE burgers SET devoured = true WHERE id = ?";
  db.query(queryString, req.params.id, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

router.delete("/api/burger/:id", function(req, res) {
  var queryString =
    "DELETE FROM burgers WHERE id = ?";
  db.query(queryString, req.params.id, function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
