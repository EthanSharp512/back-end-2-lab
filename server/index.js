const express = require("express");
const cors = require("cors");

const app = express();

const {} = require('./controller.js');

app.use(express.json());
app.use(cors());

app.listen(4004, () => {
    console.log("Port is running on 4004")
})