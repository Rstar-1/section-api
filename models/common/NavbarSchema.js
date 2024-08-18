const mongoose = require("mongoose");

const navbarSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

// model navbar
const navbar = new mongoose.model("navbar", navbarSchema);
module.exports = navbar;
