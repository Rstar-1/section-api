const mongoose = require("mongoose");

const dashnumSchema = new mongoose.Schema(
  {
    sectionpath: {
      type: String,
      required: true,
    },
    sectionname: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// model dashnum
const dashnum = new mongoose.model("dashnum", dashnumSchema);
module.exports = dashnum;
