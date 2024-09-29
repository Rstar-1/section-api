const pone = require("../../models/website/PageoneSchema");

// Pone add
exports.poneadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new pone({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "poneadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pone all data
exports.ponegetdata = async (req, res) => {
  try {
    const userdata = await pone.find();
    res.status(201).json(userdata);

    // console.log(userdata, "ponealldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pone pagination all data
exports.ponepaginationdata = async (req, res) => {
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
    const ponestore = await pone.find(searchObject).skip(offset).limit(6);
    const totalCount = await pone.countDocuments(searchObject);
    res.json({ ponestore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Pone single data
// exports.ponesingledata = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userindividual = await pone.findById({ _id: id });
//     res.status(201).json(userindividual);

//     //console.log(userindividual, "ponesingledata");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// Pone update data
exports.poneupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await pone.findByIdAndUpdate(
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

    //console.log(updateduser, "poneupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pone status data
exports.ponestatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await pone.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "ponestatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pone Temp Delete data
exports.ponetempdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const tempdeleteuser = await pone.findByIdAndUpdate(
      id,
      {
        isDeleted: req.body.isDeleted,
      },
      {
        new: true,
      }
    );

    //console.log(tempdeleteuser, "ponetempdeletedata");
    res.status(201).json(tempdeleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Pone delete data
exports.ponedeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await pone.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "ponedeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
