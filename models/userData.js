const mongoose = require('mongoose');


const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender:{
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  image:{
    type: String,
  },
  contect:{
    type:Number
  },
  teacher:
   { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }
});

const userData = mongoose.model('userData', crudSchema);

module.exports = userData;
