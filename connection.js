const mongoose = require('mongoose')

async function connectMongoDb(url) {
    //Connection
    return mongoose
        .connect(url)
        .then(() => { console.log("MongoDB Connected") })
        .catch(err => console.log("Mongo error ", err))
}

module.exports = {
    connectMongoDb,
}