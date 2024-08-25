const express = require("express");
const router = express.Router();

// ----------------------------- Automation ----------------------------- //
const DashboardRoute = require("./automationroutes/DashboardRoutes");
const SidebarRoute = require("./automationroutes/SidebarRoutes");
const ManagementRoute = require("./automationroutes/ManagementRoutes");
// ----------------------------- Automation ----------------------------- //

// ----------------------------- Common ----------------------------- //
const BannerRoute = require("./commonroutes/BannerRoutes");
const DashNumRoute = require("./commonroutes/DashNumRoutes");
const FooterRoute = require("./commonroutes/FooterRoutes");
const ManageNumRoute = require("./commonroutes/ManageNumRoutes");
const NavbarRoute = require("./commonroutes/NavbarRoutes");
const PositionRoute = require("./commonroutes/PositionRoutes");
// ----------------------------- Common ----------------------------- //

// ----------------------------- Website ----------------------------- //
const AboutRoute = require("./websiteroutes/AboutRoutes");
const BlogRoute = require("./websiteroutes/BlogRoutes");
const ContacRoute = require("./websiteroutes/ContactRoutes");
const GalleryRoute = require("./websiteroutes/GalleryRoutes");
const HomeRoute = require("./websiteroutes/HomeRoutes");
const ServiceRoute = require("./websiteroutes/ServiceRoutes");
const SubscriptionRoute = require("./websiteroutes/SubscriptionRoutes");
const PageoneRoute = require("./websiteroutes/PageoneRoutes");
const PagesecondRoute = require("./websiteroutes/PagesecondRoutes");
const PagethirdRoute = require("./websiteroutes/PagethirdRoutes");
const PageforthRoute = require("./websiteroutes/PageforthRoutes");
const PagefifthRoute = require("./websiteroutes/PagefifthRoutes");
// ----------------------------- Website ----------------------------- //

module.exports = function(app) {
 app.use("/api", router)
 DashboardRoute(router);
 SidebarRoute(router);
 ManagementRoute(router);
 BannerRoute(router);
 DashNumRoute(router);
 FooterRoute(router);
 ManageNumRoute(router);
 NavbarRoute(router);
 PositionRoute(router);
 AboutRoute(router);
 BlogRoute(router);
 ContacRoute(router);
 GalleryRoute(router);
 HomeRoute(router);
 ServiceRoute(router);
 SubscriptionRoute(router);
 PageoneRoute(router);
 PagesecondRoute(router);
 PagethirdRoute(router);
 PageforthRoute(router);
 PagefifthRoute(router);
}
