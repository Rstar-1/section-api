const product = require("../../models/website/ProductSchema");

// Product add
exports.productadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new product({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "productadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Product all data
exports.productgetdata = async (req, res) => {
  try {
    const userdata = await product.find();
    res.status(201).json(userdata);

    // console.log(userdata, "productalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Product pagination all data
exports.productpaginationdata = async (req, res) => {
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
    const productstore = await product.find(searchObject).skip(offset).limit(6);
    const totalCount = await product.countDocuments(searchObject);
    res.json({ productstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Product single data
exports.productsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await product.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "productsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Product update data
exports.productupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await product.findByIdAndUpdate(
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

    //console.log(updateduser, "productupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Product status update data
exports.productstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await product.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "productstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Product delete data
exports.productdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await product.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "productdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
