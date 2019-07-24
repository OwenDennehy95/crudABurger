const router = require("express").Router();


router.get("/", function (req, res) {
    burger.all(function (dbBurger) {
         res.render("index", {burgerDB: dbBurger});
    })
   
});

module.exports = router;