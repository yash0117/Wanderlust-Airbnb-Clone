const express = require("express");
const router = express.Router();


//Index - users
router.get("/users/:id", (req, res) => {
    res.send("GET for show users");
});

//Show - users
router.post("/users", (req, res) => {
    res.send("POST for users id");
});

//POST - users
router.delete("/users", (req, res) => {
    res.send("POST for users");
});

//DELETE - users
router.delete("/users/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;