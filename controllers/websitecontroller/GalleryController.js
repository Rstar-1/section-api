const galleryService = require("../../services/websiteservice/GalleryService");

exports.galleryadddata = async function (req, res) {
  try {
    var users = await galleryService.galleryadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gallerygetdata = async function (req, res) {
  try {
    var users = await galleryService.gallerygetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gallerypaginationdata = async function (req, res) {
  try {
    var users = await galleryService.gallerypaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gallerysingledata = async function (req, res) {
  try {
    var users = await galleryService.gallerysingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.galleryupdatedata = async function (req, res) {
  try {
    var users = await galleryService.galleryupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gallerystatusdata = async function (req, res) {
  try {
    var users = await galleryService.gallerystatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.gallerydeletedata = async function (req, res) {
  try {
    var users = await galleryService.gallerydeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
