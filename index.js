const express = require("express");
const app = express();
const getData = require("./API/getData");
// const sort = require("./API/sort");

app.use("/getDataTable", getData);
app.use("/getDataChart", getData);
app.use("/getColor", getData);
app.use("/sort", getData);
// app.use("/sort", sort);
