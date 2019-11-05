const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const router = express.Router();

const User = require("../models/User");

/* 
@route      POST api/users
@desc       Register a user
@access     Public
*/
router.post(
  "/",
  [
    check("name", "name is required")
      .not()
      .isEmpty(),
    check("email", "valid email is required").isEmail(),
    check("password", "password should be greater than 5").isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "Authentication Failed" });
      }
      user = new User({ name, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

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
