const blogService = require("../../services/websiteservice/BlogService");

exports.blogadddata = async function (req, res) {
  try {
    var users = await blogService.blogadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.bloggetdata = async function (req, res) {
  try {
    var users = await blogService.bloggetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.blogpaginationdata = async function (req, res) {
  try {
    var users = await blogService.blogpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

// exports.blogsingledata = async function (req, res) {
//   try {
//     var users = await blogService.blogsingledata(req, res);

//     return res.status(200).json({
//       status: 200,
//       data: users,
//       message: "Record data successfully",
//     });
//   } catch (error) {
//     error;
//   }
// };

exports.blogupdatedata = async function (req, res) {
  try {
    var users = await blogService.blogupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.blogstatusdata = async function (req, res) {
  try {
    var users = await blogService.blogstatusdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.blogtempdeletedata = async function (req, res) {
  try {
    var users = await blogService.blogtempdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.blogdeletedata = async function (req, res) {
  try {
    var users = await blogService.blogdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
