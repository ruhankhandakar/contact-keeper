const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const router = express.Router();

const User = require("../models/User");

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
router.post(
  "/",
  [
    check("email", "valid email is required").isEmail(),
    check("password", "password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) {
            return res.status(500).json(err);
          }
          res.json(token);
        }
      );
    } catch (error) {
      console.log(error.messaage);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
