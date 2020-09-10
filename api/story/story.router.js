const express = require("express");
const { offerStory } = require("./story.controller");

const router = express.Router();

router.post("/:number", offerStory);

module.exports = router;
