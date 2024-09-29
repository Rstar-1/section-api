const blogs = require("../../models/website/BlogSchema");

// Blogs add
exports.blogsadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new blogs({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "blogsadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blogs all data
exports.blogsgetdata = async (req, res) => {
  try {
    const userdata = await blogs.find();
    res.status(201).json(userdata);

    // console.log(userdata, "blogsalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blogs pagination all data
exports.blogspaginationdata = async (req, res) => {
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
    const blogsstore = await blogs.find(searchObject).skip(offset).limit(6);
    const totalCount = await blogs.countDocuments(searchObject);
    res.json({ blogsstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Blogs single data
// exports.blogssingledata = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userindividual = await blogs.findById({ _id: id });
//     res.status(201).json(userindividual);

//     //console.log(userindividual, "blogssingledata");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// Blogs update data
exports.blogsupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await blogs.findByIdAndUpdate(
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

    //console.log(updateduser, "blogsupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blogs status data
exports.blogsstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await blogs.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "blogsstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blogs Temp Delete data
exports.blogtempdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const tempdeleteuser = await blog.findByIdAndUpdate(
      id,
      {
        isDeleted: req.body.isDeleted,
      },
      {
        new: true,
      }
    );

    //console.log(tempdeleteuser, "blogtempdeletedata");
    res.status(201).json(tempdeleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Blogs delete data
exports.blogsdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await blogs.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "blogsdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
