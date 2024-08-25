const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/managenumadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ManageNumController.managenumadddata
  );
  app.get("/managenumgetdata", Controller.ManageNumController.managenumgetdata);
  app.post(
    "/managenumpaginationdata",
    Controller.ManageNumController.managenumpaginationdata
  );
  app.get(
    "/managenumsingledata/:id",
    Controller.ManageNumController.managenumsingledata
  );
  app.patch(
    "/managenumupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ManageNumController.managenumupdatedata
  );
  app.patch(
    "/managenumstatusdata/:id",
    Controller.ManageNumController.managenumstatusdata
  );
  app.delete(
    "/managenumdeletedata/:id",
    Controller.ManageNumController.managenumdeletedata
  );
};
