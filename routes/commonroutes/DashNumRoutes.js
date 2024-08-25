const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/dashnumadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.DashNumController.dashnumadddata
  );
  app.get("/dashnumgetdata", Controller.DashNumController.dashnumgetdata);
  app.post(
    "/dashnumpaginationdata",
    Controller.DashNumController.dashnumpaginationdata
  );
  app.get(
    "/dashnumsingledata/:id",
    Controller.DashNumController.dashnumsingledata
  );
  app.patch(
    "/dashnumupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.DashNumController.dashnumupdatedata
  );
  app.patch(
    "/dashnumstatusdata/:id",
    Controller.DashNumController.dashnumstatusdata
  );
  app.delete(
    "/dashnumdeletedata/:id",
    Controller.DashNumController.dashnumdeletedata
  );
};
