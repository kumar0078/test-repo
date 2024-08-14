const attendanceDal = require("../dal/attendanceDal");
const attendanceValidator = require("../validators/attendanceValidator");
exports.createAttendance = async (req, res) => {
  try {
    /**input validation before saving */
    let inputValidation = await attendanceValidator.inputValidation(req);
    if (!inputValidation.status) {
      return res
        .status(inputValidation.code)
        .json({ message: inputValidation.message });
    }
    /**save the data in user */
    let save = await attendanceDal.saveAttendance(req.body);

    /**if err return the response */
    if (!save.status) {
      return res.status(500).send({
        status: false,
        message: "db error",
        data: [],
      });
    }
    /**if no error send response */
    return res.status(200).send({
      status: true,
      message: "data posted successfully",
      data: save.data,
    });
  } catch (err) {
    return res.status(500).send({ status: false, response: "Error" });
  }
};
