const mettingController = require("../controller/meeting.controller");

const express = require("express");
const router = express.Router();

router.post("/meeting/start", mettingController.startMeeting);
router.get("/meeting/join", mettingController.checkMeetingExists);
router.get("/meeting/get", mettingController.getAllMeetingUsers);

module.exports = router;