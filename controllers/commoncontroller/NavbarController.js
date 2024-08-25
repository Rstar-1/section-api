const navbarService = require("../../services/commonservice/NavbarService");

exports.navbaradddata = async function (req, res) {
  try {
    var users = await navbarService.navbaradddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.navbargetdata = async function (req, res) {
  try {
    var users = await navbarService.navbargetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.navbarpaginationdata = async function (req, res) {
  try {
    var users = await navbarService.navbarpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.navbarsingledata = async function (req, res) {
  try {
    var users = await navbarService.navbarsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.navbarupdatedata = async function (req, res) {
  try {
    var users = await navbarService.navbarupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.navbarstatusdata = async function (req, res) {
  try {
    var users = await navbarService.navbarstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.navbardeletedata = async function (req, res) {
  try {
    var users = await navbarService.navbardeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
