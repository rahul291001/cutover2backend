const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rahulsgoud:Rahul*4321@cluster0.pyfcuvb.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


{
  const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
}

app.use("/api/users", require("./routes/authRoutes"));
