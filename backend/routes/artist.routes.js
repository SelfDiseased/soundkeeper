
const Artist = require("../controllers/artist.controller.js");
const express = require('express');
const router = express.Router();

router.post("/", Artist.create);

router.get("/", Artist.findAll);

router.get("/:id", Artist.findOne);

router.put("/:id", Artist.update);

router.delete("/:id", Artist.delete);

module.exports = router;
  