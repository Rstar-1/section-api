const psecondService = require("../../services/websiteservice/PagesecondService");

exports.psecondadddata = async function (req, res) {
  try {
    var users = await psecondService.psecondadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.psecondgetdata = async function (req, res) {
  try {
    var users = await psecondService.psecondgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.psecondpaginationdata = async function (req, res) {
  try {
    var users = await psecondService.psecondpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.psecondsingledata = async function (req, res) {
//   try {
//     var users = await psecondService.psecondsingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.psecondupdatedata = async function (req, res) {
  try {
    var users = await psecondService.psecondupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.psecondstatusdata = async function (req, res) {
  try {
    var users = await psecondService.psecondstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.psecondtempdeletedata = async function (req, res) {
  try {
    var users = await psecondService.psecondtempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pseconddeletedata = async function (req, res) {
  try {
    var users = await psecondService.pseconddeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
