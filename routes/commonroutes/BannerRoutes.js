const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/banneradddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.BannerController.banneradddata
  );
  app.get("/bannergetdata", Controller.BannerController.bannergetdata);
  app.post(
    "/bannerpaginationdata",
    Controller.BannerController.bannerpaginationdata
  );
  app.get(
    "/bannersingledata/:id",
    Controller.BannerController.bannersingledata
  );
  app.patch(
    "/bannerupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.BannerController.bannerupdatedata
  );
  app.patch(
    "/bannerstatusdata/:id",
    Controller.BannerController.bannerstatusdata
  );
  app.delete(
    "/bannerdeletedata/:id",
    Controller.BannerController.bannerdeletedata
  );
};
