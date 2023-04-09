const meetingServices = require("../services/meeting.service");

exports.startMeeting = (req, res, next) => {
    const { hostId, hostName } = req.body;

    var model = {
        hostId: hostId,
        hostName: hostName,
        startMeeting: Date.now()
    }


    meetingServices.startMeeting(model, (error, result) => {
        if (error) {
            return next(error);
        }

        return res.status(200).send({
            message: "Success",
            data: result.id,
        });
    })
}



exports.checkMeetingExists = (req, res, next) => {
    const { meetingId } = req.query;

    meetingServices.checkMeetingExisits(meetingId, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Succes",
            data: result
        });
    })
}



exports.getAllMeetingUsers = (req, res, next) => {
    const { meetingId } = req.query;

    meetingServices.getAllMeetingUsers(meetingId, (error, results) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Succes",
            data: results
        });
    })

}
