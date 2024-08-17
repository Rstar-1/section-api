const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/sidebaradddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.SidebarController.sidebaradddata
  );
  app.get("/sidebargetdata", Controller.SidebarController.sidebargetdata);
  app.post(
    "/sidebarpaginationdata",
    Controller.SidebarController.sidebarpaginationdata
  );
  app.get(
    "/sidebarsingledata/:id",
    Controller.SidebarController.sidebarsingledata
  );
  app.patch(
    "/sidebarupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.SidebarController.sidebarupdatedata
  );
  app.patch(
    "/sidebarstatusdata/:id",
    Controller.SidebarController.sidebarstatusdata
  );
  app.delete(
    "/sidebardeletedata/:id",
    Controller.SidebarController.sidebardeletedata
  );
};
