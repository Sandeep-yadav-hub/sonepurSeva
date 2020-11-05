const mongoose = require('mongoose')
require('dotenv').config();

//  setting the DB and connecting
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected successfully");
    console.log("CTRL + C to exit")
})

module.exports = connection