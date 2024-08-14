var appRouter = new Object();
const genericHelper = require("../helpers/generic.helper");

appRouter.initialize = function (app) {
  const middleware = async (req, res, next) => {
    req.headers.token = "121227872y"; // currently passing dummy
    if (typeof req.headers.token == "undefined" || req.headers.token === null) {
      return res
        .status(400)
        .send({ status: false, message: "Please pass token", data: [] });
    }
    return next(); //currently no need to check jwt

    // let jwtverify = await jwtVerify(req.headers.token);

    // if (jwtverify.status) {
    //     console.log('     Success');
    //     return next();
    // }

    // console.log('Authentication Failed');
    // return res.status(401).send({status:false,message:'unauthorized-access', data:[] });
  };

  var attendance = require("../routes/attendance.route");
  app.use("/test", middleware, attendance);
};

module.exports = appRouter;
