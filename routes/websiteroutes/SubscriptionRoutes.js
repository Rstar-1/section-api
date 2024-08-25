const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/subscriptionadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.SubscriptionController.subscriptionadddata
  );
  app.get("/subscriptiongetdata", Controller.SubscriptionController.subscriptiongetdata);
  app.post(
    "/subscriptionpaginationdata",
    Controller.SubscriptionController.subscriptionpaginationdata
  );
  app.get(
    "/subscriptionsingledata/:id",
    Controller.SubscriptionController.subscriptionsingledata
  );
  app.patch(
    "/subscriptionupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.SubscriptionController.subscriptionupdatedata
  );
  app.patch(
    "/subscriptionstatusdata/:id",
    Controller.SubscriptionController.subscriptionstatusdata
  );
  app.delete(
    "/subscriptiondeletedata/:id",
    Controller.SubscriptionController.subscriptiondeletedata
  );
};
