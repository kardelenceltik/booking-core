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
    req.body.rowStatusId = 1;
    const createdUser = await user.create(req.body);
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400);
  }
});
module.exports = router;
