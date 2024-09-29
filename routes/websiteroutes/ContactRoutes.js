const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/contactadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ContactController.contactadddata
  );
  app.get("/contactgetdata", Controller.ContactController.contactgetdata);
  app.post("/contactpaginationdata", Controller.ContactController.contactpaginationdata);
  // app.get("/contactsingledata/:id", Controller.ContactController.contactsingledata);
  app.patch(
    "/contactupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ContactController.contactupdatedata
  );
  app.patch("/contactstatusdata/:id", Controller.ContactController.contactstatusdata);
  app.patch("/contacttempdeletedata/:id", Controller.ContactController.contacttempdeletedata);
  app.delete("/contactdeletedata/:id", Controller.ContactController.contactdeletedata);
};
