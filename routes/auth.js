const express = require("express");

const router = express.Router();

/* 
@route      GET /api/auth/
@desc       Get Logged in User
@access     Private
*/
router.get("/", (req, res) => {
  res.json({
    msg: "Get Logged In user"
  });
});

/* 
@route      POST /api/auth/
@desc       Auth user and get token
@access     Public
*/
router.post("/", (req, res) => {
  res.json({
    msg: "Logg In user"
  });
});

module.exports = router;
