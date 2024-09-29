const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/homeadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.HomeController.homeadddata
  );
  app.get("/homegetdata", Controller.HomeController.homegetdata);
  app.post("/homepaginationdata", Controller.HomeController.homepaginationdata);
  // app.get("/homesingledata/:id", Controller.HomeController.homesingledata);
  app.patch(
    "/homeupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.HomeController.homeupdatedata
  );
  app.patch("/homestatusdata/:id", Controller.HomeController.homestatusdata);
  app.patch("/hometempdeletedata/:id", Controller.HomeController.hometempdeletedata);
  app.delete("/homedeletedata/:id", Controller.HomeController.homedeletedata);
};
