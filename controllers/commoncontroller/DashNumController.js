const dashnumService = require("../../services/commonservice/DashNumService");

exports.dashnumadddata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashnumgetdata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashnumpaginationdata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashnumsingledata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashnumupdatedata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashnumstatusdata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.dashnumdeletedata = async function (req, res) {
  try {
    var users = await dashnumService.dashnumdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
