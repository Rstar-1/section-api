const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  }
);

// model api
const api = new mongoose.model("api", apiSchema);
module.exports = api;
