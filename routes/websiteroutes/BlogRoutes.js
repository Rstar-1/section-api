const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/blogadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.BlogController.blogadddata
  );
  app.get("/bloggetdata", Controller.BlogController.bloggetdata);
  app.post(
    "/blogpaginationdata",
    Controller.BlogController.blogpaginationdata
  );
  // app.get("/blogsingledata/:id", Controller.BlogController.blogsingledata);
  app.patch(
    "/blogupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.BlogController.blogupdatedata
  );
  app.patch("/blogstatusdata/:id", Controller.BlogController.blogstatusdata);
  app.patch("/blogtempdeletedata/:id", Controller.BlogController.blogtempdeletedata);
  app.delete(
    "/blogdeletedata/:id",
    Controller.BlogController.blogdeletedata
  );
};
