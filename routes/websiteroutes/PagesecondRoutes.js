const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/psecondadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PagesecondController.psecondadddata
  );
  app.get("/psecondgetdata", Controller.PagesecondController.psecondgetdata);
  app.post(
    "/psecondpaginationdata",
    Controller.PagesecondController.psecondpaginationdata
  );
  // app.get("/psecondsingledata/:id", Controller.PagesecondController.psecondsingledata);
  app.patch(
    "/psecondupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PagesecondController.psecondupdatedata
  );
  app.patch("/psecondstatusdata/:id", Controller.PagesecondController.psecondstatusdata);
  app.patch("/psecondtempdeletedata/:id", Controller.PagesecondController.psecondtempdeletedata);
  app.delete(
    "/pseconddeletedata/:id",
    Controller.PagesecondController.pseconddeletedata
  );
};
