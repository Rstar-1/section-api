const contact = require("../../models/website/ContactSchema");

// Contact add
exports.contactadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new contact({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "contactadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Contact all data
exports.contactgetdata = async (req, res) => {
  try {
    const userdata = await contact.find();
    res.status(201).json(userdata);

    // console.log(userdata, "contactalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Contact pagination all data
exports.contactpaginationdata = async (req, res) => {
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
    const contactstore = await contact.find(searchObject).skip(offset).limit(6);
    const totalCount = await contact.countDocuments(searchObject);
    res.json({ contactstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Contact single data
// exports.contactsingledata = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userindividual = await contact.findById({ _id: id });
//     res.status(201).json(userindividual);

//     //console.log(userindividual, "contactsingledata");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// Contact update data
exports.contactupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await contact.findByIdAndUpdate(
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

    //console.log(updateduser, "contactupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Contact status data
exports.contactstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await contact.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "contactstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Contact Temp Delete data
exports.contacttempdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const tempdeleteuser = await contact.findByIdAndUpdate(
      id,
      {
        isDeleted: req.body.isDeleted,
      },
      {
        new: true,
      }
    );

    //console.log(tempdeleteuser, "contacttempdeletedata");
    res.status(201).json(tempdeleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Contact delete data
exports.contactdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await contact.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "contactdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
