const pforth = require("../../models/website/PageforthSchema");

// Pforth add
exports.pforthadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new pforth({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "pforthadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pforth all data
exports.pforthgetdata = async (req, res) => {
  try {
    const userdata = await pforth.find();
    res.status(201).json(userdata);

    // console.log(userdata, "pforthalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pforth pagination all data
exports.pforthpaginationdata = async (req, res) => {
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
    const pforthstore = await pforth.find(searchObject).skip(offset).limit(6);
    const totalCount = await pforth.countDocuments(searchObject);
    res.json({ pforthstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Pforth single data
exports.pforthsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await pforth.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "pforthsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pforth update data
exports.pforthupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await pforth.findByIdAndUpdate(
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

    //console.log(updateduser, "pforthupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pforth status update data
exports.pforthstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await pforth.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "pforthstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pforth delete data
exports.pforthdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await pforth.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "pforthdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
