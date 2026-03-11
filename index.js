const express = require("express");
const fs = require("fs");

const userRouter = require("./routes/user");

const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

// const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 5000;

//Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube");

//Middleware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

app.use((req, res, next) => {
  console.log("Hello from m2");
  // return res.end('Hey')
  next();
});

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
