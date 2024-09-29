const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/galleryadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.GalleryController.galleryadddata
  );
  app.get("/gallerygetdata", Controller.GalleryController.gallerygetdata);
  app.post(
    "/gallerypaginationdata",
    Controller.GalleryController.gallerypaginationdata
  );
  // app.get(
  //   "/gallerysingledata/:id",
  //   Controller.GalleryController.gallerysingledata
  // );
  app.patch(
    "/galleryupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.GalleryController.galleryupdatedata
  );
  app.patch(
    "/gallerystatusdata/:id",
    Controller.GalleryController.gallerystatusdata
  );
  app.patch(
    "/gallerytempdeletedata/:id",
    Controller.GalleryController.gallerytempdeletedata
  );
  app.delete(
    "/gallerydeletedata/:id",
    Controller.GalleryController.gallerydeletedata
  );
};
