const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/apiadddata", Controller.ApiController.apiadddata);
  app.get("/apigetdata", Controller.ApiController.apigetdata);
  app.post("/apipaginationdata", Controller.ApiController.apipaginationdata);
  app.patch("/apisingledata/:id", Controller.ApiController.apisingledata);
  app.patch("/apiupdatedata/:id", Controller.ApiController.apiupdatedata);
  app.patch("/apistatusdata/:id", Controller.ApiController.apistatusdata);
  app.delete("/apideletedata/:id", Controller.ApiController.apideletedata);
};
