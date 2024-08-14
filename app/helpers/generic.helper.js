const jwt = require("jsonwebtoken");
const config = require("../../config/config");

exports.CreateJWT = async (signinData) => {
  try {
    const token = await jwt.sign({ signinData }, config.jwt.secret, {
      expiresIn: config.jwt.TokenLife, // expires in 24 hours
    });
    return {
      status: true,
      message: "token generated sucessfully",
      data: token,
    };
  } catch (error) {
    return { status: false, message: `JWTError: ${error.message}`, data: [] };
  }
};

exports.CreateMailJWT = async (signinData) => {
  try {
    const token = await jwt.sign({ signinData }, config.jwt.secret, {
      expiresIn: config.jwt.TokenLife, // expires in 1 hours  //1h //5min
    });
    return {
      status: true,
      message: "token generated sucessfully",
      data: token,
    };
  } catch (error) {
    return {
      status: false,
      message: `mailJWTError: ${error.message}`,
      data: [],
    };
  }
};

exports.jwtVerify = async (token) => {
  try {
    let verify = jwt.verify(token, config.jwt.secret);
    // console.log("verified details", verify)
    if (verify) {
      return {
        status: true,
        code: 200,
        message: "authentication success",
        data: [],
        Keyword: "ok",
      };
    }
    return {
      status: false,
      code: 500,
      message: "something went wrong while verify",
      data: [],
      Keyword: "internal-error",
    };
  } catch (error) {
    return {
      status: false,
      code: 401,
      message: `JwtVerifyError: ${error.message}`,
      data: [],
      Keyword: error.name,
    };
  }
};

exports.jwtDecode = async (token) => {
  try {
    let decode = await jwt.decode(token);
    if (decode) {
      return {
        status: true,
        code: 200,
        message: "decode success",
        data: decode,
        Keyword: "ok",
      };
    }
    return {
      status: false,
      code: 500,
      message: "something went wrong while decode",
      data: [],
      Keyword: "internal-error",
    };
  } catch (error) {
    return {
      status: false,
      code: 401,
      message: `JwtDecodeError: ${error.message}`,
      data: [],
      Keyword: error.name,
    };
  }
};

exports.convertMonthsToYears = async (Totalmonths) => {
  try {
    let Years = (Totalmonths / 12) | 0;
    let Months = Totalmonths % 12;
    return {
      status: true,
      message: "converted sucessfully",
      data: { years: Years, months: Months },
    };
  } catch (error) {
    return {
      status: false,
      message: `ConvertMonthsToYearsError: ${error.message}`,
      data: [],
    };
  }
};
