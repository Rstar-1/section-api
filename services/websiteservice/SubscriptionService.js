const subscription = require("../../models/website/SubscriptionSchema");

// Subscription add
exports.subscriptionadddata = async (req, res) => {
  const { sectionpath, sectionname } = req.body;
  try {
    const adduser = new subscription({
      sectionpath,
      sectionname,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "subscriptionadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Subscription all data
exports.subscriptiongetdata = async (req, res) => {
  try {
    const userdata = await subscription.find();
    res.status(201).json(userdata);

    // console.log(userdata, "subscriptionalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Subscription pagination all data
exports.subscriptionpaginationdata = async (req, res) => {
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
    const subscriptionstore = await subscription.find(searchObject).skip(offset).limit(6);
    const totalCount = await subscription.countDocuments(searchObject);
    res.json({ subscriptionstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Subscription single data
// exports.subscriptionsingledata = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userindividual = await subscription.findById({ _id: id });
//     res.status(201).json(userindividual);

//     //console.log(userindividual, "subscriptionsingledata");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };

// Subscription update data
exports.subscriptionupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await subscription.findByIdAndUpdate(
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

    //console.log(updateduser, "subscriptionupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Subscription status data
exports.subscriptionstatusdata = async (req, res) => {
  try {
    const { id } = req.params;

    const statususer = await subscription.findByIdAndUpdate(
      id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    //console.log(statususer, "subscriptionstatusdata");
    res.status(201).json(statususer);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Subscription Temp Delete data
exports.subscriptiontempdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const tempdeleteuser = await subscription.findByIdAndUpdate(
      id,
      {
        isDeleted: req.body.isDeleted,
      },
      {
        new: true,
      }
    );

    //console.log(tempdeleteuser, "subscriptiontempdeletedata");
    res.status(201).json(tempdeleteuser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Subscription delete data
exports.subscriptiondeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await subscription.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "subscriptiondeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
