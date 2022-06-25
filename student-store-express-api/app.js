// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();
const data = require("./data/db.json")
const routesStore = require("./routes/store")

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())
app.use("/store", routesStore)

app.get("/", async (req, res, next) => {
    res.status(200).json({ ping: pong });
})
app.get("/store", async (req, res, next) => {
    res.status(200).json(data);
})


module.exports = app;
