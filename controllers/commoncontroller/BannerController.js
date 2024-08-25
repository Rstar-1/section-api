const bannerService = require("../../services/commonservice/BannerService");

exports.banneradddata = async function (req, res) {
  try {
    var users = await bannerService.banneradddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bannergetdata = async function (req, res) {
  try {
    var users = await bannerService.bannergetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bannerpaginationdata = async function (req, res) {
  try {
    var users = await bannerService.bannerpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bannersingledata = async function (req, res) {
  try {
    var users = await bannerService.bannersingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bannerupdatedata = async function (req, res) {
  try {
    var users = await bannerService.bannerupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bannerstatusdata = async function (req, res) {
  try {
    var users = await bannerService.bannerstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bannerdeletedata = async function (req, res) {
  try {
    var users = await bannerService.bannerdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
