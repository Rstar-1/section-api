const api = require("../../models/apis/ApiSchema");

// Api add
exports.apiadddata = async (req, res) => {
  const { title, path, project } = req.body;
  try {
    const adduser = new api({
      title,
      path,
      project,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "apiadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Api all data
exports.apigetdata = async (req, res) => {
  try {
    const userdata = await api.find();
    res.status(201).json(userdata);

    // console.log(userdata, "apialldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Api pagination all data
exports.apipaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        title: {
          $regex: `${search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const apistore = await api.find(searchObject).skip(offset).limit(6);
    const totalCount = await api.countDocuments(searchObject);
    res.json({ apistore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Api single data
exports.apisingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await api.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "apisingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Api update data
exports.apiupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await api.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    //console.log(updateduser, "apiupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Api status update data
exports.apistatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await api.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "apistatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Api delete data
exports.apideletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await api.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "apideletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
