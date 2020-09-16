
const User = require("../controllers/user.controller.js");
const express = require('express');
const router = express.Router();

router.post("/", User.create);

router.get("/", User.findAll);

router.get("/admins", User.findAllAdmins);

router.get("/:id", User.findOne);

router.put("/:id", User.update);

router.delete("/:id", User.delete);

module.exports = router;
  