// -------------------------------------------- Automation -------------------------------------------- //
const DashboardController = require("../controllers/automationcontroller/DashboardController.js");
const ManagementController = require("../controllers/automationcontroller/ManagementController.js");
const SidebarController = require("../controllers/automationcontroller/SidebarController.js");
// -------------------------------------------- Automation -------------------------------------------- //

// -------------------------------------------- Common -------------------------------------------- //
const BannerController = require("../controllers/commoncontroller/BannerController.js");
const DashNumController = require("../controllers/commoncontroller/DashNumController.js");
const FooterController = require("../controllers/commoncontroller/FooterController.js");
const ManageNumController = require("../controllers/commoncontroller/ManageNumController.js");
const NavbarController = require("../controllers/commoncontroller/NavbarController.js");
const PositionController = require("../controllers/commoncontroller/PositionController.js");
// -------------------------------------------- Common -------------------------------------------- //

// -------------------------------------------- Website -------------------------------------------- //
const AboutController = require("../controllers/websitecontroller/AboutController.js");
const BlogController = require("../controllers/websitecontroller/BlogController.js");
const ContactController = require("../controllers/websitecontroller/ContactController.js");
const GalleryController = require("../controllers/websitecontroller/GalleryController.js");
const HomeController = require("../controllers/websitecontroller/HomeController.js");
const PagefifthController = require("../controllers/websitecontroller/PagefifthController.js");
const PageforthController = require("../controllers/websitecontroller/PageforthController.js");
const PageoneController = require("../controllers/websitecontroller/PageoneController.js");
const PagesecondController = require("../controllers/websitecontroller/PagesecondController.js");
const PagethirdController = require("../controllers/websitecontroller/PagethirdController.js");
const ProductController = require("../controllers/websitecontroller/ProductController.js");
const ServiceController = require("../controllers/websitecontroller/ServiceController.js");
const SubscriptionController = require("../controllers/websitecontroller/SubscriptionController.js");
// -------------------------------------------- Website -------------------------------------------- //

// -------------------------------------------- API -------------------------------------------- //
const ApiController = require("../controllers/apicontroller/ApiController.js");
// -------------------------------------------- API -------------------------------------------- //

module.exports = {
  DashboardController,
  ManagementController,
  SidebarController,
  BannerController,
  DashNumController,
  FooterController,
  ManageNumController,
  NavbarController,
  PositionController,
  AboutController,
  BlogController,
  ContactController,
  GalleryController,
  HomeController,
  PagefifthController,
  PageforthController,
  PageoneController,
  PagesecondController,
  PagethirdController,
  ProductController,
  ServiceController,
  SubscriptionController,
  ApiController,
};