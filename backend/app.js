const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(express.json());

//---------------------Route Imports--------------------------

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
//-------------------- Middleware for errors ------------------

app.use(errorMiddleware);

module.exports = app;
