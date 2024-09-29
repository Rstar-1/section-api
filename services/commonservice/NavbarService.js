const navbar = require("../../models/common/NavbarSchema");

// Navbar add
exports.navbaradddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new navbar({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "navbaradddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Navbar all data
exports.navbargetdata = async (req, res) => {
  try {
    const userdata = await navbar.find();
    res.status(201).json(userdata);

    // console.log(userdata, "navbaralldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Navbar pagination all data
exports.navbarpaginationdata = async (req, res) => {
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
    const navbarstore = await navbar.find(searchObject).skip(offset).limit(6);
    const totalCount = await navbar.countDocuments(searchObject);
    res.json({ navbarstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Navbar single data
exports.navbarsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await navbar.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "navbarsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Navbar update data
exports.navbarupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await navbar.findByIdAndUpdate(
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

    //console.log(updateduser, "navbarupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Navbar status data
exports.navbarstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await navbar.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "navbarstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Navbar delete data
exports.navbardeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await navbar.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "navbardeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
