const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);
