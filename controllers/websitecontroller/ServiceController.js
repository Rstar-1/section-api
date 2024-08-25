const Service = require("../../services/websiteservice/Service");

exports.serviceadddata = async function (req, res) {
  try {
    var users = await Service.serviceadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.servicegetdata = async function (req, res) {
  try {
    var users = await Service.servicegetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.servicepaginationdata = async function (req, res) {
  try {
    var users = await Service.servicepaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.servicesingledata = async function (req, res) {
  try {
    var users = await Service.servicesingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.serviceupdatedata = async function (req, res) {
  try {
    var users = await Service.serviceupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.servicestatusdata = async function (req, res) {
  try {
    var users = await Service.servicestatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.servicedeletedata = async function (req, res) {
  try {
    var users = await Service.servicedeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
