const apiService = require("../../services/apiservice/ApiService");

exports.apiadddata = async function (req, res) {
  try {
    var users = await apiService.apiadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apigetdata = async function (req, res) {
  try {
    var users = await apiService.apigetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apipaginationdata = async function (req, res) {
  try {
    var users = await apiService.apipaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apisingledata = async function (req, res) {
  try {
    var users = await apiService.apisingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apiupdatedata = async function (req, res) {
  try {
    var users = await apiService.apiupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apistatusdata = async function (req, res) {
  try {
    var users = await apiService.apistatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apitempdeletedata = async function (req, res) {
  try {
    var users = await apiService.apitempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.apideletedata = async function (req, res) {
  try {
    var users = await apiService.apideletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
