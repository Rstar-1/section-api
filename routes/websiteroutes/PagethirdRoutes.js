const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/pthirdadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PagethirdController.pthirdadddata
  );
  app.get("/pthirdgetdata", Controller.PagethirdController.pthirdgetdata);
  app.post(
    "/pthirdpaginationdata",
    Controller.PagethirdController.pthirdpaginationdata
  );
  // app.get(
  //   "/pthirdsingledata/:id",
  //   Controller.PagethirdController.pthirdsingledata
  // );
  app.patch(
    "/pthirdupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PagethirdController.pthirdupdatedata
  );
  app.patch(
    "/pthirdstatusdata/:id",
    Controller.PagethirdController.pthirdstatusdata
  );
  app.patch(
    "/pthirdtempdeletedata/:id",
    Controller.PagethirdController.pthirdtempdeletedata
  );
  app.delete(
    "/pthirddeletedata/:id",
    Controller.PagethirdController.pthirddeletedata
  );
};
