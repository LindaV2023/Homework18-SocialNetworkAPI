const mongoose = require("mongoose");
const db = require("../models");
const { connect, connection } = require("mongoose");

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/thoughtDB";

connect(connectionString);

module.exports = connection;






// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || process.env.MONGOOD, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// module.exports = mongoose.connection;