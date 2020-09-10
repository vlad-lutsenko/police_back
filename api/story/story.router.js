const express = require("express");
const { offerStory, addStory } = require("./story.controller");

const router = express.Router();

router.post("/:number", offerStory);

router.post("/add/:number", addStory);

module.exports = router;
