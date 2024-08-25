const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/pfifthadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PagefifthController.pfifthadddata
  );
  app.get("/pfifthgetdata", Controller.PagefifthController.pfifthgetdata);
  app.post(
    "/pfifthpaginationdata",
    Controller.PagefifthController.pfifthpaginationdata
  );
  app.get(
    "/pfifthsingledata/:id",
    Controller.PagefifthController.pfifthsingledata
  );
  app.patch(
    "/pfifthupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PagefifthController.pfifthupdatedata
  );
  app.patch(
    "/pfifthstatusdata/:id",
    Controller.PagefifthController.pfifthstatusdata
  );
  app.delete(
    "/pfifthdeletedata/:id",
    Controller.PagefifthController.pfifthdeletedata
  );
};
