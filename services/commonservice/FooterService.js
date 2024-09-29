const footer = require("../../models/common/FooterSchema");

// Footer add
exports.footeradddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new footer({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "footeradddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Footer all data
exports.footergetdata = async (req, res) => {
  try {
    const userdata = await footer.find();
    res.status(201).json(userdata);

    // console.log(userdata, "footeralldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Footer pagination all data
exports.footerpaginationdata = async (req, res) => {
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
    const footerstore = await footer.find(searchObject).skip(offset).limit(6);
    const totalCount = await footer.countDocuments(searchObject);
    res.json({ footerstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Footer single data
exports.footersingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await footer.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "footersingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Footer update data
exports.footerupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await footer.findByIdAndUpdate(
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

    //console.log(updateduser, "footerupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Footer status data
exports.footerstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await footer.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "footerstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Footer delete data
exports.footerdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await footer.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "footerdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
