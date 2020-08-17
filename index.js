const express = require("express");
const app = express();
const getColor = require("./API/getColor");
const getDataSort = require("./API/getDataSort");
const sort = require("./API/sort");
const port = 8000;

app.use("/", getColor);
app.use("/", getDataSort);
app.use("/", sort);
app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});