const pthirdService = require("../../services/websiteservice/PagethirdService");

exports.pthirdadddata = async function (req, res) {
  try {
    var users = await pthirdService.pthirdadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pthirdgetdata = async function (req, res) {
  try {
    var users = await pthirdService.pthirdgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pthirdpaginationdata = async function (req, res) {
  try {
    var users = await pthirdService.pthirdpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.pthirdsingledata = async function (req, res) {
//   try {
//     var users = await pthirdService.pthirdsingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.pthirdupdatedata = async function (req, res) {
  try {
    var users = await pthirdService.pthirdupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pthirdstatusdata = async function (req, res) {
  try {
    var users = await pthirdService.pthirdstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pthirdtempdeletedata = async function (req, res) {
  try {
    var users = await productService.pthirdtempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.pthirddeletedata = async function (req, res) {
  try {
    var users = await pthirdService.pthirddeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
