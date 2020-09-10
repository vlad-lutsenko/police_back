const express = require("express");
const {
  getPolicemanList,
  addPoliceman,
  getOnePoliceman,
} = require("./policeman.controller");

const router = express.Router();

router.get("/:policemanNumber", getOnePoliceman);

router.get("/", getPolicemanList);

// router.post("/", addPoliceman);

module.exports = router;
