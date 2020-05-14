const express = require("express");
const app = express();
const getDataTable = require("./API/getDataTable");
const getDataChart = require("./API/getDataChart");
const getColor = require("./API/getColor");

app.use("./getDataTable", getDataTable);
app.use("./getDataChart", getDataChart);
app.use("./getColor", getColor);
