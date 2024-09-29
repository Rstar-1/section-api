const pthird = require("../../models/website/PagethirdSchema");

// Pthird add
exports.pthirdadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new pthird({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "pthirdadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pthird all data
exports.pthirdgetdata = async (req, res) => {
  try {
    const userdata = await pthird.find();
    res.status(201).json(userdata);

    // console.log(userdata, "pthirdalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pthird pagination all data
exports.pthirdpaginationdata = async (req, res) => {
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
    const pthirdstore = await pthird.find(searchObject).skip(offset).limit(6);
    const totalCount = await pthird.countDocuments(searchObject);
    res.json({ pthirdstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Pthird single data
// exports.pthirdsingledata = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userindividual = await pthird.findById({ _id: id });
//     res.status(201).json(userindividual);

//     //console.log(userindividual, "pthirdsingledata");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// Pthird update data
exports.pthirdupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await pthird.findByIdAndUpdate(
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

    //console.log(updateduser, "pthirdupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pthird status data
exports.pthirdstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await pthird.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "pthirdstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pthird Temp Delete data
exports.pthirdtempdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const tempdeleteuser = await pthird.findByIdAndUpdate(
      id,
      {
        isDeleted: req.body.isDeleted,
      },
      {
        new: true,
      }
    );

    //console.log(tempdeleteuser, "pthirdtempdeletedata");
    res.status(201).json(tempdeleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pthird delete data
exports.pthirddeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await pthird.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "pthirddeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
