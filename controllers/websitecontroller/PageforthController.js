const pforthService = require("../../services/websiteservice/PageforthService");

exports.pforthadddata = async function (req, res) {
  try {
    var users = await pforthService.pforthadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pforthgetdata = async function (req, res) {
  try {
    var users = await pforthService.pforthgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pforthpaginationdata = async function (req, res) {
  try {
    var users = await pforthService.pforthpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pforthsingledata = async function (req, res) {
  try {
    var users = await pforthService.pforthsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pforthupdatedata = async function (req, res) {
  try {
    var users = await pforthService.pforthupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pforthstatusdata = async function (req, res) {
  try {
    var users = await pforthService.pforthstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pforthdeletedata = async function (req, res) {
  try {
    var users = await pforthService.pforthdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
