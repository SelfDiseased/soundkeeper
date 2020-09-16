
const Track = require("../controllers/track.controller.js");
const express = require('express');
const router = express.Router();

router.post("/", Track.create);

router.get("/", Track.findAll);

router.get("/:artist_id", Track.findTracksByArtist);

router.get("/:album_id", Track.findTracksByAlbum);

router.get("/:id", Track.findOne);

router.put("/:id", Track.update);

router.delete("/:id", Track.delete);

module.exports = router;
  