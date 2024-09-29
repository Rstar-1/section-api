const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/serviceadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ServiceController.serviceadddata
  );
  app.get("/servicegetdata", Controller.ServiceController.servicegetdata);
  app.post("/servicepaginationdata", Controller.ServiceController.servicepaginationdata);
  // app.get("/servicesingledata/:id", Controller.ServiceController.servicesingledata);
  app.patch(
    "/serviceupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ServiceController.serviceupdatedata
  );
  app.patch("/servicestatusdata/:id", Controller.ServiceController.servicestatusdata);
  app.patch("/servicetempdeletedata/:id", Controller.ServiceController.servicetempdeletedata);
  app.delete("/servicedeletedata/:id", Controller.ServiceController.servicedeletedata);
};
