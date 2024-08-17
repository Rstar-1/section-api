const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/managementadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ManagementController.managementadddata
  );
  app.get(
    "/managementgetdata",
    Controller.ManagementController.managementgetdata
  );
  app.post(
    "/managementpaginationdata",
    Controller.ManagementController.managementpaginationdata
  );
  app.get(
    "/managementsingledata/:id",
    Controller.ManagementController.managementsingledata
  );
  app.patch(
    "/managementupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ManagementController.managementupdatedata
  );
  app.patch(
    "/managementstatusdata/:id",
    Controller.ManagementController.managementstatusdata
  );
  app.delete(
    "/managementdeletedata/:id",
    Controller.ManagementController.managementdeletedata
  );
};
