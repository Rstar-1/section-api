const dashboardService = require("../../services/automationservice/DashboardService");

exports.dashboardadddata = async function (req, res) {
  try {
    var users = await dashboardService.dashboardadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashboardgetdata = async function (req, res) {
  try {
    var users = await dashboardService.dashboardgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashboardpaginationdata = async function (req, res) {
  try {
    var users = await dashboardService.dashboardpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashboardsingledata = async function (req, res) {
  try {
    var users = await dashboardService.dashboardsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashboardupdatedata = async function (req, res) {
  try {
    var users = await dashboardService.dashboardupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashboardstatusdata = async function (req, res) {
  try {
    var users = await dashboardService.dashboardstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashboarddeletedata = async function (req, res) {
  try {
    var users = await dashboardService.dashboarddeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
