exports.inputValidation = async (req) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return { status: false, code: 400, message: "input should be object" };
    }
    if (!req.body.name) {
      return { status: false, code: 400, message: "name should be mandatory" };
    }
    if (!req.body.address) {
      return {
        status: false,
        code: 400,
        message: "address should be mandatory",
      };
    }
    if (!req.body.dateOfBirth) {
      return {
        status: false,
        code: 400,
        message: "dateOfBirth should be mandatory",
      };
    }
    return { status: true, code: 200, message: "all validation passed" };
  } catch (err) {
    return res.status(500).send({ status: false, response: "Error" });
  }
};
