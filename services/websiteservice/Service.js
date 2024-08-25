const service = require("../../models/website/ServiceSchema");

// Service add
exports.serviceadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new service({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "serviceadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Service all data
exports.servicegetdata = async (req, res) => {
  try {
    const userdata = await service.find();
    res.status(201).json(userdata);

    // console.log(userdata, "servicealldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Service pagination all data
exports.servicepaginationdata = async (req, res) => {
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
    const servicestore = await service.find(searchObject).skip(offset).limit(6);
    const totalCount = await service.countDocuments(searchObject);
    res.json({ servicestore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Service single data
exports.servicesingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await service.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "servicesingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Service update data
exports.serviceupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await service.findByIdAndUpdate(
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

    //console.log(updateduser, "serviceupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Service status update data
exports.servicestatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await service.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "servicestatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Service delete data
exports.servicedeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await service.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "servicedeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
