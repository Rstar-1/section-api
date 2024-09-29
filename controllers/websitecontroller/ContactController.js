const contactService = require("../../services/websiteservice/ContactService");

exports.contactadddata = async function (req, res) {
  try {
    var users = await contactService.contactadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.contactgetdata = async function (req, res) {
  try {
    var users = await contactService.contactgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.contactpaginationdata = async function (req, res) {
  try {
    var users = await contactService.contactpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.contactsingledata = async function (req, res) {
//   try {
//     var users = await contactService.contactsingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.contactupdatedata = async function (req, res) {
  try {
    var users = await contactService.contactupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.contactstatusdata = async function (req, res) {
  try {
    var users = await contactService.contactstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.contacttempdeletedata = async function (req, res) {
  try {
    var users = await contactService.contacttempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.contactdeletedata = async function (req, res) {
  try {
    var users = await contactService.contactdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
