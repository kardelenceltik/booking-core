const express = require("express");
const router = express.Router();
const slider = require("../models/sliders");

router.get("/get-sliders", async (req, res) => {
  try {
    const sliders = await slider.find({ rowStatusId: 1 });
    res.status(200).json(sliders);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.post("/create-slider", async (req, res) => {
  try {
    req.body.rowStatusId = 1;
    const createdSlider = await slider.create(req.body);
    res.status(200).json(createdSlider);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
