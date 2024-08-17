const sidebarService = require("../../services/automationservice/SidebarService");

exports.sidebaradddata = async function (req, res) {
  try {
    var users = await sidebarService.sidebaradddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.sidebargetdata = async function (req, res) {
  try {
    var users = await sidebarService.sidebargetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.sidebarpaginationdata = async function (req, res) {
  try {
    var users = await sidebarService.sidebarpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.sidebarsingledata = async function (req, res) {
  try {
    var users = await sidebarService.sidebarsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.sidebarupdatedata = async function (req, res) {
  try {
    var users = await sidebarService.sidebarupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.sidebarstatusdata = async function (req, res) {
  try {
    var users = await sidebarService.sidebarstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.sidebardeletedata = async function (req, res) {
  try {
    var users = await sidebarService.sidebardeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
