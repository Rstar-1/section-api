const mongoose = require("mongoose");

const brndingSchema = new mongoose.Schema(
  {
    projectname: {
      type: String,
      required: true,
    },
    plantype: {
      type: String,
      required: true,
    },
    primary: {
      type: String,
      required: true,
    },
    secondary: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    payment: {
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
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  }
);

// model brnding
const brnding = new mongoose.model("brnding", brndingSchema);
module.exports = brnding;
