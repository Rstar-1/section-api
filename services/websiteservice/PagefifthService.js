const pfifth = require("../../models/website/PagefifthSchema");

// Pfifth add
exports.pfifthadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new pfifth({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "pfifthadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pfifth all data
exports.pfifthgetdata = async (req, res) => {
  try {
    const userdata = await pfifth.find();
    res.status(201).json(userdata);

    // console.log(userdata, "pfifthalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pfifth pagination all data
exports.pfifthpaginationdata = async (req, res) => {
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
    const pfifthstore = await pfifth.find(searchObject).skip(offset).limit(6);
    const totalCount = await pfifth.countDocuments(searchObject);
    res.json({ pfifthstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Pfifth single data
exports.pfifthsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await pfifth.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "pfifthsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pfifth update data
exports.pfifthupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await pfifth.findByIdAndUpdate(
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

    //console.log(updateduser, "pfifthupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pfifth status update data
exports.pfifthstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await pfifth.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "pfifthstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pfifth delete data
exports.pfifthdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await pfifth.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "pfifthdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
