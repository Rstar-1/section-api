const management = require("../../models/automation/ManagementSchema");

// Management add
exports.managementadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new management({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "managementadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Management all data
exports.managementgetdata = async (req, res) => {
  try {
    const userdata = await management.find();
    res.status(201).json(userdata);

    // console.log(userdata, "managementalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Management pagination all data
exports.managementpaginationdata = async (req, res) => {
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
    const managementstore = await management.find(searchObject).skip(offset).limit(6);
    const totalCount = await management.countDocuments(searchObject);
    res.json({ managementstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Management single data
exports.managementsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await management.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "managementsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Management update data
exports.managementupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await management.findByIdAndUpdate(
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

    //console.log(updateduser, "managementupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Management status update data
exports.managementstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await management.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "managementstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Management delete data
exports.managementdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await management.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "managementdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
