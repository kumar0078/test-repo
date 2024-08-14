const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collection = "test";

const attendanceSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: "Please fill  name",
    trim: true,
  },
  address: {
    type: String,
    default: "",
    required: "Please fill  address",
    trim: true,
  },
  dateOfBirth: {
    type: String,
    default: "",
    required: "Please fill  dateOfBirth",
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  attendanceSchema: mongoose.model(collection, attendanceSchema, collection),
};
