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

router.post("/delete-category", async (req, res) => {
  try {
    const categoryId = req.body.id;
    const updatedCategory = await category.findOneAndUpdate(
      { _id: categoryId },
      { rowStatusId: 4 }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json(error);
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
