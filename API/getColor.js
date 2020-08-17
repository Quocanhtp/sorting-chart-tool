const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(function (req, res, next) {  
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain to make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

const uri = process.env.DB_FTECH_URI_HEADER + process.env.DB_FTECH_URI_USERNAME + encodeURIComponent(`${process.env.DB_FTECH_URI_PASSWORD}`) + process.env.DB_FTECH_URI_IP;
console.log(uri); 

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
