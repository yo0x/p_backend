const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv/config");
//Middlewares
app.use(cors());

//import routes
const aboutContact  = require('./routes/aboutmer');
const contactRoute = require('./routes/contactr');
const goalsRoute = require('./routes/goalsr');
const projRoute = require('./routes/projectsr');



app.use(bodyParser.json());

app.use('/about-me', aboutContact);
app.use('/contact', contactRoute);
app.use('/goals', goalsRoute);
app.use('/projects', projRoute);




//Routes
app.get("/yonor", (req, res) => {
  res.send("Sir yonor top dev");
});
app.get("/posts", (req, res) => {
  res.send("We are on home");
});
//Connect to DB
mongoose.connect(process.env.DB_CONNECION, { useNewUrlParser: true, useUnifiedTopology: true } , () =>
  console.log("Connected to db")
);

//Listen
app.listen(process.env.PORT || 3000);
