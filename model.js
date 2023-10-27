const Mongoose = require('mongoose');

const userSchema = Mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  age: Number,
  picture: String
})

module.exports = Mongoose.model('User', userSchema);