const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/pforthadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PageforthController.pforthadddata
  );
  app.get("/pforthgetdata", Controller.PageforthController.pforthgetdata);
  app.post(
    "/pforthpaginationdata",
    Controller.PageforthController.pforthpaginationdata
  );
  // app.get(
  //   "/pforthsingledata/:id",
  //   Controller.PageforthController.pforthsingledata
  // );
  app.patch(
    "/pforthupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PageforthController.pforthupdatedata
  );
  app.patch(
    "/pforthstatusdata/:id",
    Controller.PageforthController.pforthstatusdata
  );
  app.patch(
    "/pforthtempdeletedata/:id",
    Controller.PageforthController.pforthtempdeletedata
  );
  app.delete(
    "/pforthdeletedata/:id",
    Controller.PageforthController.pforthdeletedata
  );
};
