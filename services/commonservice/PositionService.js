const position = require("../../models/common/PositionSchema");

// Position add
exports.positionadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new position({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "positionadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Position all data
exports.positiongetdata = async (req, res) => {
  try {
    const userdata = await position.find();
    res.status(201).json(userdata);

    // console.log(userdata, "positionalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Position pagination all data
exports.positionpaginationdata = async (req, res) => {
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
    const positionstore = await position.find(searchObject).skip(offset).limit(6);
    const totalCount = await position.countDocuments(searchObject);
    res.json({ positionstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Position single data
exports.positionsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await position.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "positionsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Position update data
exports.positionupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await position.findByIdAndUpdate(
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

    //console.log(updateduser, "positionupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Position status data
exports.positionstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await position.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "positionstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Position delete data
exports.positiondeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await position.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "positiondeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
