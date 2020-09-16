
const Genre = require("../controllers/genre.controller.js");
const express = require('express');
const router = express.Router();

router.post("/", Genre.create);

router.get("/", Genre.findAll);

router.get("/:id", Genre.findOne);

router.put("/:id", Genre.update);

router.delete("/:id", Genre.delete);

module.exports = router;
  