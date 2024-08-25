const gallery = require("../../models/website/GallerySchema");

// Gallery add
exports.galleryadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new gallery({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "galleryadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery all data
exports.gallerygetdata = async (req, res) => {
  try {
    const userdata = await gallery.find();
    res.status(201).json(userdata);

    // console.log(userdata, "galleryalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery pagination all data
exports.gallerypaginationdata = async (req, res) => {
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
    const gallerystore = await gallery.find(searchObject).skip(offset).limit(6);
    const totalCount = await gallery.countDocuments(searchObject);
    res.json({ gallerystore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Gallery single data
exports.gallerysingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await gallery.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "gallerysingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery update data
exports.galleryupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await gallery.findByIdAndUpdate(
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

    //console.log(updateduser, "galleryupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery status update data
exports.gallerystatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await gallery.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "gallerystatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery delete data
exports.gallerydeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await gallery.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "gallerydeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
