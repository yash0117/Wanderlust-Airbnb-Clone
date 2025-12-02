const express = require("express");
const router = express.Router();

//Index 
router.get("/", (req, res) => {
    res.send("GET for show post");
});

//Show 
router.post("/:id", (req, res) => {
    res.send("POST for post id");
});

//POST 
router.delete("/", (req, res) => {
    res.send("POST for post");
});

//DELETE 
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;