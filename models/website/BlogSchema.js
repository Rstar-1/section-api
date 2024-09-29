const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    sectionpath: {
      type: String,
      required: true,
    },
    sectionname: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    sectionId: {
      type: String,
      required: true,
    },
    bgcolor: {
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

// model blogs
const blogs = new mongoose.model("blogs", blogsSchema);
module.exports = blogs;
