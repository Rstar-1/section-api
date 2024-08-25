const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/poneadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PageoneController.poneadddata
  );
  app.get(
    "/ponegetdata",
    Controller.PageoneController.ponegetdata
  );
  app.post(
    "/ponepaginationdata",
    Controller.PageoneController.ponepaginationdata
  );
  app.get(
    "/ponesingledata/:id",
    Controller.PageoneController.ponesingledata
  );
  app.patch(
    "/poneupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PageoneController.poneupdatedata
  );
  app.patch(
    "/ponestatusdata/:id",
    Controller.PageoneController.ponestatusdata
  );
  app.delete(
    "/ponedeletedata/:id",
    Controller.PageoneController.ponedeletedata
  );
};
