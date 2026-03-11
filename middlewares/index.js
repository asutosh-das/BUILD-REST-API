const fs = require("fs");

function logReqRes(filename) {
  return (req, res, next) => {
    // console.log("Hello from m1");
    // // return res.json({ msg: "Hello from m1" })
    // next();
    fs.appendFile(
      filename,
      `${Date.now()}:${req.method}:${req.path}\n`,
      (err, data) => {
        next();
      },
    );
  };
}


module.exports = {
    logReqRes,
}