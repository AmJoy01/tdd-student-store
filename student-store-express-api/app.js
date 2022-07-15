// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const app = express();
const routesStore = require("./routes/store")
const { NotFoundError } = require("./utils/errors")

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())

app.use("/", routesStore)

app.get("/", (req, res, next) => {
    return res.status(200).json({ "ping": "pong" })
})

app.use((req, res, next) => {
    return next(new NotFoundError())
})

app.use((error, req, res, next) => {
    const status = error.status || 500
    const message = error.message

    return res.status(status).json({
        error: { message, status }
    })
})

module.exports = app;
