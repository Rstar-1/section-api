const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/navbaradddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.NavbarController.navbaradddata
  );
  app.get("/navbargetdata", Controller.NavbarController.navbargetdata);
  app.post(
    "/navbarpaginationdata",
    Controller.NavbarController.navbarpaginationdata
  );
  app.get(
    "/navbarsingledata/:id",
    Controller.NavbarController.navbarsingledata
  );
  app.patch(
    "/navbarupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.NavbarController.navbarupdatedata
  );
  app.patch(
    "/navbarstatusdata/:id",
    Controller.NavbarController.navbarstatusdata
  );
  app.delete(
    "/navbardeletedata/:id",
    Controller.NavbarController.navbardeletedata
  );
};
