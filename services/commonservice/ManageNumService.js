const managenum = require("../../models/common/ManageNumSchema");

// ManageNum add
exports.managenumadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new managenum({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "managenumadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// ManageNum all data
exports.managenumgetdata = async (req, res) => {
  try {
    const userdata = await managenum.find();
    res.status(201).json(userdata);

    // console.log(userdata, "managenumalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// ManageNum pagination all data
exports.managenumpaginationdata = async (req, res) => {
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
    const managenumstore = await managenum.find(searchObject).skip(offset).limit(6);
    const totalCount = await managenum.countDocuments(searchObject);
    res.json({ managenumstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ManageNum single data
exports.managenumsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await managenum.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "managenumsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// ManageNum update data
exports.managenumupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await managenum.findByIdAndUpdate(
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

    //console.log(updateduser, "managenumupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// ManageNum status update data
exports.managenumstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await managenum.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "managenumstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// ManageNum delete data
exports.managenumdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await managenum.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "managenumdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
