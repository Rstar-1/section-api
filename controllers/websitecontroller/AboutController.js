const aboutService = require("../../services/websiteservice/AboutService");

exports.aboutadddata = async function (req, res) {
  try {
    var users = await aboutService.aboutadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.aboutgetdata = async function (req, res) {
  try {
    var users = await aboutService.aboutgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.aboutpaginationdata = async function (req, res) {
  try {
    var users = await aboutService.aboutpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.aboutsingledata = async function (req, res) {
//   try {
//     var users = await aboutService.aboutsingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.aboutupdatedata = async function (req, res) {
  try {
    var users = await aboutService.aboutupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.aboutstatusdata = async function (req, res) {
  try {
    var users = await aboutService.aboutstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.abouttempdeletedata = async function (req, res) {
  try {
    var users = await aboutService.abouttempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.aboutdeletedata = async function (req, res) {
  try {
    var users = await aboutService.aboutdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
