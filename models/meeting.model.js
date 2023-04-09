const mongoose = require("mongoose");

const { Schema } = mongoose;


const meeting = mongoose.model(
    "Meeting",
    mongoose.Schema({
        hostId: {
            type: String,
            require: true,
        },
        hostName: {
            type: String,
            require: false,

        },
        startTime: {
            type: Date,
            require: true,
        },
        meetingUsers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MeetingUser",
            }
        ]
    }, {
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id.toSting(),
                    delete ret._id;
                delete ret.__v
            }
        }
    }, { timestamps: true }
    )
);


module.exports = { meeting }

