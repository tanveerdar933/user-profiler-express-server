const Mongoose = require('mongoose');
Mongoose.set('strictQuery', true);
const { MONGO_URI } = require('./env_exports');

const connectDB = async () => {
  try {
    const conn = await Mongoose.connect(MONGO_URI)
    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`)
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;