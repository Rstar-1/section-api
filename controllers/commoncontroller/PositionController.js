const positionService = require("../../services/commonservice/PositionService");

exports.positionadddata = async function (req, res) {
  try {
    var users = await positionService.positionadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.positiongetdata = async function (req, res) {
  try {
    var users = await positionService.positiongetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.positionpaginationdata = async function (req, res) {
  try {
    var users = await positionService.positionpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.positionsingledata = async function (req, res) {
  try {
    var users = await positionService.positionsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.positionupdatedata = async function (req, res) {
  try {
    var users = await positionService.positionupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.positionstatusdata = async function (req, res) {
  try {
    var users = await positionService.positionstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.positiondeletedata = async function (req, res) {
  try {
    var users = await positionService.positiondeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
