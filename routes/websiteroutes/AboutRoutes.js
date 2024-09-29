const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/aboutadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.AboutController.aboutadddata
  );
  app.get("/aboutgetdata", Controller.AboutController.aboutgetdata);
  app.post(
    "/aboutpaginationdata",
    Controller.AboutController.aboutpaginationdata
  );
  // app.get(
  //   "/aboutsingledata/:id",
  //   Controller.AboutController.aboutsingledata
  // );
  app.patch(
    "/aboutupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.AboutController.aboutupdatedata
  );
  app.patch(
    "/aboutstatusdata/:id",
    Controller.AboutController.aboutstatusdata
  );
  app.patch(
    "/abouttempdeletedata/:id",
    Controller.AboutController.abouttempdeletedata
  );
  app.delete(
    "/aboutdeletedata/:id",
    Controller.AboutController.aboutdeletedata
  );
};
