const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`connection succesfull`))
  .catch((err) => {
    console.log(err);
  });
