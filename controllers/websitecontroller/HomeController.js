const homeService = require("../../services/websiteservice/HomeService");

exports.homeadddata = async function (req, res) {
  try {
    var users = await homeService.homeadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.homegetdata = async function (req, res) {
  try {
    var users = await homeService.homegetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.homepaginationdata = async function (req, res) {
  try {
    var users = await homeService.homepaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.homesingledata = async function (req, res) {
//   try {
//     var users = await homeService.homesingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.homeupdatedata = async function (req, res) {
  try {
    var users = await homeService.homeupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.homestatusdata = async function (req, res) {
  try {
    var users = await homeService.homestatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.hometempdeletedata = async function (req, res) {
  try {
    var users = await homeService.hometempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.homedeletedata = async function (req, res) {
  try {
    var users = await homeService.homedeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
