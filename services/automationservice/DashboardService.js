const dashboard = require("../../models/automation/DashboardSchema");

// Dashboard add
exports.dashboardadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new dashboard({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "dashboardadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Dashboard all data
exports.dashboardgetdata = async (req, res) => {
  try {
    const userdata = await dashboard.find();
    res.status(201).json(userdata);

    // console.log(userdata, "dashboardalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Dashboard pagination all data
exports.dashboardpaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        sectionname: {
          $regex: `${search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const dashboardstore = await dashboard.find(searchObject).skip(offset).limit(6);
    const totalCount = await dashboard.countDocuments(searchObject);
    res.json({ dashboardstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Dashboard single data
exports.dashboardsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await dashboard.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "dashboardsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Dashboard update data
exports.dashboardupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await dashboard.findByIdAndUpdate(
      id,
      {
        sectionpath: req.body.sectionpath,
        sectionname: req.body.sectionname,
        picture: req.body.picture,
      },
      {
        new: true,
      }
    );

    //console.log(updateduser, "dashboardupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Dashboard status data
exports.dashboardstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await dashboard.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "dashboardstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Dashboard delete data
exports.dashboarddeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await dashboard.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "dashboarddeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
