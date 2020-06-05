const express = require("express");
const app = express();
const getData = require("./API/getData");

app.use("/getDataChart", getData);
app.use("/getColor", getData);
app.use("/sort", getData);
