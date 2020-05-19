const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 8000;
const lodash = require("lodash");
const bodyParser = require("body-parser");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain to make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
const uri = ``; //your authentication URI string

app.listen(port, () => {
  MongoClient.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    (err, db) => {
      if (err) console.log(err);

      var mydb = db.db(""); //your DB name
      var chart = mydb.collection(""); //your DB collection
      var config = mydb.collection(""); //your DB collection config for colors
      console.log(`Server listen on port ${port}`);

      app.get("/getColor", (req, res) => {
        config.find({}).toArray((err, docs) => {
          res.send(docs);
          if (err) throw err;
        });
      });

      app.get("/getDataChart", (req, res) => {
        chart
          .find({})
          .sort({ date: 1, name: 1 })
          .toArray((err, docs) => {
            if (err) throw err;
            else res.send(lodash.groupBy(docs, "name"));
          });
      });

      app.get("/getDataTable", (req, res) => {
        chart
          .find({})
          .sort({ date: 1, name: 1 })
          .toArray((err, docs) => {
            if (err) throw err;
            else res.send(docs);
          });
      });

      app.get("/getDataSort", (req, res) => {
        chart
          .find({})
          .sort({ date: 1, name: 1 })
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
        console.log(dataSort);
        res.send(dataSort);
        res.end();
      });
    }
  );
});

module.exports = app;
