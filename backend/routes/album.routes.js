
const Album = require("../controllers/album.controller.js");
const express = require('express');
const router = express.Router();

router.post("/", Album.create);

router.get("/", Album.findAll);

router.get("/:genre_id", Album.findAlbumsByGenre);

router.get("/:id", Album.findOne);

router.put("/:id", Album.update);

router.delete("/:id", Album.delete);

module.exports = router;
  