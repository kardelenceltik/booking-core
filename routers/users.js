const express = require("express");
const router = express.Router();
const user = require("../models/users");

router.get("/get-all-users", async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {}
});

router.post("/create", async (req, res) => {
  try {
    req.body.rowStatusId = 1;
    const createdUser = await user.create(req.body);
    res.json(createdUser);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
