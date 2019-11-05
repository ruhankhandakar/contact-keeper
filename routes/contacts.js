const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const authMiddleware = require("../middleware/auth");
const Contact = require("../models/Contact");
const User = require("../models/User");

/* 
@route      GET api/contacts
@desc       Get All User's Contact
@access     Private
*/
router.get("/", authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (error) {
    console.log(error.messaage);
    res.status(500).send("Server Error");
  }
});

/* 
@route      POST api/contacts
@desc       Add new contact
@access     Private
*/
router.post("/", (req, res) => {
  res.json({
    msg: "Add new contact"
  });
});

/* 
@route      PUT api/contacts/:id
@desc       Update contact
@access     Private
*/
router.put("/:id", (req, res) => {
  res.json({
    msg: "Update contact"
  });
});

/* 
@route      DELETE api/contacts/:id
@desc       Delete contact
@access     Private
*/
router.delete("/:id", (req, res) => {
  res.json({
    msg: "Delete contact"
  });
});

module.exports = router;
