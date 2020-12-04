module.exports = () => {
  const mongoose = require('mongoose')
  require('dotenv').config()
  let connectionString = process.env.MONGODB_URI || 'mongodb://localhost/Whiteboard';
  mongoose.connect(connectionString, { useUnifiedTopology: true , useNewUrlParser: true});
  console.log(process.env.MONGODB_URI);
};
