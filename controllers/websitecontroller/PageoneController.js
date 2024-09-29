const poneService = require("../../services/websiteservice/PageoneService");

exports.poneadddata = async function (req, res) {
  try {
    var users = await poneService.poneadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.ponegetdata = async function (req, res) {
  try {
    var users = await poneService.ponegetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.ponepaginationdata = async function (req, res) {
  try {
    var users = await poneService.ponepaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.ponesingledata = async function (req, res) {
//   try {
//     var users = await poneService.ponesingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.poneupdatedata = async function (req, res) {
  try {
    var users = await poneService.poneupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.ponestatusdata = async function (req, res) {
  try {
    var users = await poneService.ponestatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.ponetempdeletedata = async function (req, res) {
  try {
    var users = await poneService.ponetempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.ponedeletedata = async function (req, res) {
  try {
    var users = await poneService.ponedeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
