var express = require("express");
var burgers = require("../models/burger")

var router = express.Router();

router.get("/", function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

/*router.post("/api/burgers", function (req, res) {
  burgers.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function (result) {
    res.json({ id: result.insertId });
  });
});*/
router.post("/api/burgers", function(req, res){
  burgers.create("burger_name", req.body.name, function(result) {
      res.redirect('back');
  } )
});

router.put("/api/burgers/:id", function(req, res){
  burgers.updateOne("devoured", true, `id=${req.params.id}`, function(result) {
      res.redirect('back');
  });
});
/*router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});*/

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;