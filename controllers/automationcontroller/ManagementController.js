const managementService = require("../../services/automationservice/ManagementService");

exports.managementadddata = async function (req, res) {
  try {
    var users = await managementService.managementadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managementgetdata = async function (req, res) {
  try {
    var users = await managementService.managementgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managementpaginationdata = async function (req, res) {
  try {
    var users = await managementService.managementpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managementsingledata = async function (req, res) {
  try {
    var users = await managementService.managementsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managementupdatedata = async function (req, res) {
  try {
    var users = await managementService.managementupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managementstatusdata = async function (req, res) {
  try {
    var users = await managementService.managementstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managementdeletedata = async function (req, res) {
  try {
    var users = await managementService.managementdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
