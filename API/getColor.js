const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 8000;
const lodash = require("lodash");
const bodyParser = require("body-parser");
const moment = require("moment");
const dateFormat = require("dateformat");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain to make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
// const uri = `mongodb://test01:${encodeURIComponent(
//   "a@123456"
// )}@103.74.122.87:27000`; //your authentication URI string

const uri = `mongodb://localhost:27017`; //your authentication URI string

app.get("/getColor", (req, res) => {
  MongoClient.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    (err, db) => {
      if (err) console.log(err);

      var mydb = db.db("reportFwork"); //your DB name
      var config = mydb.collection("config"); //your DB collection config for colors

      config.find({}).toArray((err, docs) => {
        res.send(docs);
        if (err) throw err;
      });
    }
  );
});

module.exports = app;
