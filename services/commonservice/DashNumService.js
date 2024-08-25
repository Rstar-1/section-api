const dashnum = require("../../models/common/DashNumSchema");

// DashNum add
exports.dashnumadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new dashnum({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "dashnumadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// DashNum all data
exports.dashnumgetdata = async (req, res) => {
  try {
    const userdata = await dashnum.find();
    res.status(201).json(userdata);

    // console.log(userdata, "dashnumalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// DashNum pagination all data
exports.dashnumpaginationdata = async (req, res) => {
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
    const dashnumstore = await dashnum.find(searchObject).skip(offset).limit(6);
    const totalCount = await dashnum.countDocuments(searchObject);
    res.json({ dashnumstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DashNum single data
exports.dashnumsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await dashnum.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "dashnumsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// DashNum update data
exports.dashnumupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await dashnum.findByIdAndUpdate(
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

    //console.log(updateduser, "dashnumupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// DashNum status update data
exports.dashnumstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await dashnum.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "dashnumstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// DashNum delete data
exports.dashnumdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await dashnum.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "dashnumdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
