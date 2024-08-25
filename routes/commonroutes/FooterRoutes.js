const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/footeradddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.FooterController.footeradddata
  );
  app.get("/footergetdata", Controller.FooterController.footergetdata);
  app.post(
    "/footerpaginationdata",
    Controller.FooterController.footerpaginationdata
  );
  app.get(
    "/footersingledata/:id",
    Controller.FooterController.footersingledata
  );
  app.patch(
    "/footerupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.FooterController.footerupdatedata
  );
  app.patch(
    "/footerstatusdata/:id",
    Controller.FooterController.footerstatusdata
  );
  app.delete(
    "/footerdeletedata/:id",
    Controller.FooterController.footerdeletedata
  );
};
