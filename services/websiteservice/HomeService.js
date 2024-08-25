const home = require("../../models/website/HomeSchema");

// Home add
exports.homeadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new home({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "homeadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Home all data
exports.homegetdata = async (req, res) => {
  try {
    const userdata = await home.find();
    res.status(201).json(userdata);

    // console.log(userdata, "homealldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Home pagination all data
exports.homepaginationdata = async (req, res) => {
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
    const homestore = await home.find(searchObject).skip(offset).limit(6);
    const totalCount = await home.countDocuments(searchObject);
    res.json({ homestore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Home single data
exports.homesingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await home.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "homesingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Home update data
exports.homeupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await home.findByIdAndUpdate(
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

    //console.log(updateduser, "homeupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Home status update data
exports.homestatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await home.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "homestatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Home delete data
exports.homedeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await home.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "homedeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
