const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prospectSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    profile: String,
    year: String,
    position: String,
    height: String,
    weight: String,
    highSchool: String,
    clubTeam: String,
    phone: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zipCode: String,
    gpaW: String,
    gpaU: String,
    score: String,
  }, {
    timestamps: true
  },
);


module.exports = mongoose.model('Prospect', prospectSchema);