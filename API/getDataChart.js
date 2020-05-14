const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 8001;
const lodash = require("lodash");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain to make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const uri = ``; //your authentication URI string

MongoClient.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) console.log(err);

    var mydb = db.db(""); //your DB name
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
    app.get("/getDataChart", (req, res) => {
      mydb
        .collection("") //your DB collection
        .find({})
        .sort({ Date: 1, Name: 1 })
        .toArray((err, docs) => {
          if (err) throw err;
          else res.send(lodash.groupBy(docs, "Name"));
        });
    });
  }
);

module.exports = app;
