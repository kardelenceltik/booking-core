const express = require("express");
const router = express.Router();
const category = require("../models/categories");

router.get("/get-active-categories", async (req, res) => {
  try {
    const categories = await category.find({ rowStatusId: 1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(400);
  }
});

router.post("/create-category", async (req, res) => {
  try {
    req.body.rowStatusId = 1;
    const createdCategory = await category.create(req.body);
    res.status(200).json(createdCategory);
  } catch (error) {
    res.status(400);
  }
});
module.exports = router;
