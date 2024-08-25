const footerService = require("../../services/commonservice/FooterService");

exports.footeradddata = async function (req, res) {
  try {
    var users = await footerService.footeradddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.footergetdata = async function (req, res) {
  try {
    var users = await footerService.footergetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.footerpaginationdata = async function (req, res) {
  try {
    var users = await footerService.footerpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.footersingledata = async function (req, res) {
  try {
    var users = await footerService.footersingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.footerupdatedata = async function (req, res) {
  try {
    var users = await footerService.footerupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.footerstatusdata = async function (req, res) {
  try {
    var users = await footerService.footerstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.footerdeletedata = async function (req, res) {
  try {
    var users = await footerService.footerdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
