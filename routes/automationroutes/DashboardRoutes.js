const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/dashboardadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.DashboardController.dashboardadddata
  );
  app.get("/dashboardgetdata", Controller.DashboardController.dashboardgetdata);
  app.post(
    "/dashboardpaginationdata",
    Controller.DashboardController.dashboardpaginationdata
  );
  app.get(
    "/dashboardsingledata/:id",
    Controller.DashboardController.dashboardsingledata
  );
  app.patch(
    "/dashboardupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.DashboardController.dashboardupdatedata
  );
  app.patch(
    "/dashboardstatusdata/:id",
    Controller.DashboardController.dashboardstatusdata
  );
  app.delete(
    "/dashboarddeletedata/:id",
    Controller.DashboardController.dashboarddeletedata
  );
};
