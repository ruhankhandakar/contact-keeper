const express = require("express");
const router = express.Router();

const User = require("../models/User");

/* 
@route      POST api/users
@desc       Register a user
@access     Public
*/
router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;
