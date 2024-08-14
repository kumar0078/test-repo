module.exports = {
  serverPort: process.env.serverPort,

  dbUrl: process.env.JOBPORTAL_PROFILE_MONGO_URL,

  jwt: {
    TokenLife: process.env.JwtTokenLife,
    secret: process.env.jwtSecret,
  },
};
