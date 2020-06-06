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

app.listen(port, () => {
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
      var config = mydb.collection("config"); //your DB collection config for colors
      console.log(`Server listen on port ${port}`);

      app.get("/getColor", (req, res) => {
        config.find({}).toArray((err, docs) => {
          res.send(docs);
          if (err) throw err;
        });
      });

      app.get("/getDataSort", (req, res) => {
        chart
          .find({})
          .sort({ date: 1, name: 1 })
          .collation({ locale: "en_US", numericOrdering: true })
          .toArray((err, docs) => {
            if (err) throw err;
            else res.send(docs);
          });
      });
      app.post("/sort", (req, res) => {
        const dataSort = {
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          name: req.body.name,
        };

        var startDate = new Date(dataSort.startDate);
        var endDate = new Date(dataSort.endDate);
        chart
          .find({})
          .sort({ date: 1, name: 1 })
          .collation({ locale: "en_US", numericOrdering: true })
          .toArray((err, docs) => {
            if (err) throw err;

            docs.map((data) => {
              if (
                dataSort.name === "Tất Cả" &&
                data.date >= startDate &&
                data.date <= endDate
              ) {
                res.write(JSON.stringify(data), () => {
                  res.end();
                });
              } else if (
                dataSort.name === data.name &&
                data.date >= startDate &&
                data.date <= endDate
              ) {
                res.write(JSON.stringify(data), () => {
                  res.end();
                });
              }
            });
          });
      });
    }
  );
});

module.exports = app;
