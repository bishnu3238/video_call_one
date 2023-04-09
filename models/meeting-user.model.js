const mongoose = require("mongoose");

const { Schema } = mongoose;


const meetingUser = mongoose.model(
    "MeetingUser",
    mongoose.Schema({
        socketId: {
            type: String,
            // require: true,
        },
        meetingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meeting",

        },
        userId: {
            type: String,
            require: true,
        },
        joined: {
            type: Boolean,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        isAlive: {
            type: Boolean,
            require: true,
        },
    }, { timestaps: true }
    )
);


module.exports = { meetingUser }

