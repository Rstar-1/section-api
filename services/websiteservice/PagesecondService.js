const psecond = require("../../models/website/PagesecondShema");

// Psecond add
exports.psecondadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new psecond({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "psecondadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Psecond all data
exports.psecondgetdata = async (req, res) => {
  try {
    const userdata = await psecond.find();
    res.status(201).json(userdata);

    // console.log(userdata, "psecondalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Psecond pagination all data
exports.psecondpaginationdata = async (req, res) => {
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
    const psecondstore = await psecond.find(searchObject).skip(offset).limit(6);
    const totalCount = await psecond.countDocuments(searchObject);
    res.json({ psecondstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Psecond single data
// exports.psecondsingledata = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userindividual = await psecond.findById({ _id: id });
//     res.status(201).json(userindividual);

//     //console.log(userindividual, "psecondsingledata");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// Psecond update data
exports.psecondupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await psecond.findByIdAndUpdate(
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

    //console.log(updateduser, "psecondupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Psecond status data
exports.psecondstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await psecond.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "psecondstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Psecond Temp Delete data
exports.psecondtempdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const tempdeleteuser = await psecond.findByIdAndUpdate(
      id,
      {
        isDeleted: req.body.isDeleted,
      },
      {
        new: true,
      }
    );

    //console.log(tempdeleteuser, "psecondtempdeletedata");
    res.status(201).json(tempdeleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Psecond delete data
exports.pseconddeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await psecond.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "pseconddeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
