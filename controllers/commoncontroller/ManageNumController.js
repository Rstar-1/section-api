const managenumService = require("../../services/commonservice/ManageNumService");

exports.managenumadddata = async function (req, res) {
  try {
    var users = await managenumService.managenumadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenumgetdata = async function (req, res) {
  try {
    var users = await managenumService.managenumgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenumpaginationdata = async function (req, res) {
  try {
    var users = await managenumService.managenumpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenumsingledata = async function (req, res) {
  try {
    var users = await managenumService.managenumsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenumupdatedata = async function (req, res) {
  try {
    var users = await managenumService.managenumupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenumstatusdata = async function (req, res) {
  try {
    var users = await managenumService.managenumstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.managenumdeletedata = async function (req, res) {
  try {
    var users = await managenumService.managenumdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
