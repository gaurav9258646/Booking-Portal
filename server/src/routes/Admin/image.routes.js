const express = require("express");
const {
  createImage,
  getAllImages,
  getImageById,
  getImagesByHotel,
  deleteImage,
} = require("../../controllers/Admin/Image.controllers");

const router = express.Router();

router.post("/add", createImage);

router.get("/", getAllImages);

router.get("/:id", getImageById);

router.get("/hotel/:hotel_id", getImagesByHotel);

router.delete("/:id", deleteImage);

module.exports = router;
