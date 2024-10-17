/* include mongoose */
const mongoose = require("mongoose")

/* Schema */
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String,
  },
}, { timestamps: true });


/* Create A Model */
const User = mongoose.model("user", userSchema);

module.exports = User;