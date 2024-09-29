const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
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

// model contact
const contact = new mongoose.model("contact", contactSchema);
module.exports = contact;
