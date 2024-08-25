const subscriptionService = require("../../services/websiteservice/SubscriptionService");

exports.subscriptionadddata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptionadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.subscriptiongetdata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptiongetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.subscriptionpaginationdata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptionpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.subscriptionsingledata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptionsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.subscriptionupdatedata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptionupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.subscriptionstatusdata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptionstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.subscriptiondeletedata = async function (req, res) {
  try {
    var users = await subscriptionService.subscriptiondeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
