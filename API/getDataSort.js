const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

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

const uri = process.env.DB_FTECH_URI_HEADER + process.env.DB_FTECH_URI_USERNAME + encodeURIComponent(`${process.env.DB_FTECH_URI_PASSWORD}`) + process.env.DB_FTECH_URI_IP;

app.get("/getDataSort", (req, res) => {
  MongoClient.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    (err, db) => {
      if (err) console.log(err);

      var mydb = db.db("reportFwork"); //your DB name
      var chart = mydb.collection("chart"); //your DB collection
      chart
        .find({})
        .sort({ date: 1, name: 1 })
        .collation({ locale: "en_US", numericOrdering: true })
        .toArray((err, docs) => {
          if (err) throw err;
          else res.send(docs);
        });
    }
  );
});

module.exports = app;
