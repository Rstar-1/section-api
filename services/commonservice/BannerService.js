const banner = require("../../models/common/BannerSchema");

// Banner add
exports.banneradddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new banner({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "banneradddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Banner all data
exports.bannergetdata = async (req, res) => {
  try {
    const userdata = await banner.find();
    res.status(201).json(userdata);

    // console.log(userdata, "banneralldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Banner pagination all data
exports.bannerpaginationdata = async (req, res) => {
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
    const bannerstore = await banner
      .find(searchObject)
      .skip(offset)
      .limit(6);
    const totalCount = await banner.countDocuments(searchObject);
    res.json({ bannerstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Banner single data
exports.bannersingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await banner.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "bannersingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Banner update data
exports.bannerupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await banner.findByIdAndUpdate(
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

    //console.log(updateduser, "bannerupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Banner status data
exports.bannerstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await banner.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "bannerstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Banner delete data
exports.bannerdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await banner.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "bannerdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
