const pfifthService = require("../../services/websiteservice/PagefifthService");

exports.pfifthadddata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pfifthgetdata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pfifthpaginationdata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.pfifthsingledata = async function (req, res) {
//   try {
//     var users = await pfifthService.pfifthsingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.pfifthupdatedata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pfifthstatusdata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pfifthtempdeletedata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthtempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pfifthdeletedata = async function (req, res) {
  try {
    var users = await pfifthService.pfifthdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
