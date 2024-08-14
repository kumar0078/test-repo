const AttendanceModel = require("../models/attendance.model").attendanceSchema;

module.exports = {
  saveAttendance: async (payload) => {
    try {
      let attendance = new AttendanceModel(payload);
      let result = await attendance.save();
      if (result) {
        return { status: true, data: result, message: "ok" };
      }
      return { status: false, data: result, message: "faild to save" };
    } catch (error) {
      return {
        status: false,
        message: `MongoError: ${error.message}`,
        data: [],
      };
    }
  },
};
