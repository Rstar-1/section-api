const about = require("../../models/website/AboutSchema");

// About add
exports.aboutadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new about({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "aboutadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// About all data
exports.aboutgetdata = async (req, res) => {
  try {
    const userdata = await about.find();
    res.status(201).json(userdata);

    // console.log(userdata, "aboutalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// About pagination all data
exports.aboutpaginationdata = async (req, res) => {
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
    const aboutstore = await about.find(searchObject).skip(offset).limit(6);
    const totalCount = await about.countDocuments(searchObject);
    res.json({ aboutstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// About single data
exports.aboutsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await about.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "aboutsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// About update data
exports.aboutupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await about.findByIdAndUpdate(
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

    //console.log(updateduser, "aboutupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// About status update data
exports.aboutstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await about.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "aboutstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// About delete data
exports.aboutdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await about.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "aboutdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
