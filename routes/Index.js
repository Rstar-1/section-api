const express = require("express");
const router = express.Router();

// ----------------------------- Automation ----------------------------- //
const DashboardRoute = require("./automationroutes/DashboardRoutes");
const SidebarRoute = require("./automationroutes/SidebarRoutes");
const ManagementRoute = require("./automationroutes/ManagementRoutes");
// ----------------------------- Automation ----------------------------- //

module.exports = function(app) {
 app.use("/api", router)
 DashboardRoute(router);
 SidebarRoute(router);
 ManagementRoute(router);
}
