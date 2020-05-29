const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String, 
  email: {
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
  },
  password: {
    type: String, 
    required: true
  } 
}, {
  timestamps: true
});

userSchema.set('toJSON', { 
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  } 
})
module.exports = mongoose.model('User', userSchema);