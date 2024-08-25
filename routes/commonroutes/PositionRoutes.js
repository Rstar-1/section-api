const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/positionadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PositionController.positionadddata
  );
  app.get("/positiongetdata", Controller.PositionController.positiongetdata);
  app.post(
    "/positionpaginationdata",
    Controller.PositionController.positionpaginationdata
  );
  app.get(
    "/positionsingledata/:id",
    Controller.PositionController.positionsingledata
  );
  app.patch(
    "/positionupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.PositionController.positionupdatedata
  );
  app.patch(
    "/positionstatusdata/:id",
    Controller.PositionController.positionstatusdata
  );
  app.delete(
    "/positiondeletedata/:id",
    Controller.PositionController.positiondeletedata
  );
};
