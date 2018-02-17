const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();
//create routers and export them

// Select all burgers from the database and render them
router.get("/", function(req, res) {
    burger.selectAll(function(result) {
        res.render("index", {burger:result});
 });
});

// Note: the redirect is commented out and a 200 status is passed back to
// the ajax call because the page was not refreshing properly. The front-end
// uses a location.reload() when the status is passed back.
//
// Insert a new burger to the database
router.post("/", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        console.log(result);
        res.sendStatus(200);
        // res.redirect("/");
  });
});

// Update a burger's devoured status
router.put("/:id", function(req,res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
        // res.redirect("/");
  });
});

// Delete a burger from the database
router.delete("/:id", function(req,res) {
    burger.deleteOne(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
      // res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
