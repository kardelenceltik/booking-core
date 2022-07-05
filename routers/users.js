const express = require("express");
const router = express.Router();
const user = require("../models/users");
router.get("/get-all-users", async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400);
  }
});

router.post("/create", async (req, res) => {
  try {
    console.log(req.body.name.length);
    if (req.body.name.length < 3) {
      res.statusMessage = "Name space cannot be less than 3 characters!";
      res.status(400).json();
    } else if (req.body.surname.length < 3) {
      res.statusMessage = "Surname space cannot be less than 3 characters!";
      res.status(400).json();
    } else if (req.body.phone.length < 11) {
      res.statusMessage =
        "Your phone number cannot be less than 11 characters!";
      res.status(400).json();
    } else if (req.body.password.length < 6) {
      res.statusMessage = "Password field cannot be less than 6 characters";
      res.status(400).json();
    } else {
      req.body.rowStatusId = 1;
      const createdUser = await user.create(req.body);
      res.status(200).json(createdUser);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
module.exports = router;
