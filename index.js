const express = require("express");
const app = express();
const getData = require("./API/getData");

app.use("./getDataTable", getData);
app.use("./getDataChart", getData);
app.use("./getColor", getData);
