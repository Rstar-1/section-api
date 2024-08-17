const sidebar = require("../../models/automation/SidebarSchema");

// Sidebar add
exports.sidebaradddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new sidebar({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "sidebaradddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Sidebar all data
exports.sidebargetdata = async (req, res) => {
  try {
    const userdata = await sidebar.find();
    res.status(201).json(userdata);

    // console.log(userdata, "sidebaralldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Sidebar pagination all data
exports.sidebarpaginationdata = async (req, res) => {
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
    const sidebarstore = await sidebar.find(searchObject).skip(offset).limit(6);
    const totalCount = await sidebar.countDocuments(searchObject);
    res.json({ sidebarstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Sidebar single data
exports.sidebarsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await sidebar.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "sidebarsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Sidebar update data
exports.sidebarupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await sidebar.findByIdAndUpdate(
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

    //console.log(updateduser, "sidebarupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Sidebar status update data
exports.sidebarstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await sidebar.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "sidebarstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Sidebar delete data
exports.sidebardeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await sidebar.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "sidebardeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
