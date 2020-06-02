const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interactionSchema = new Schema({
  email: Boolean,
  call: Boolean,
  text: Boolean,
  instagram: Boolean
}, {
  timestamps: true
});

const noteSchema = new Schema({
  notes: String
}, {
  timestamps: true
});

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
    interaction: [interactionSchema],
    notes: [noteSchema]
  }, 
  {
    timestamps: true
  },
);


module.exports = mongoose.model('Prospect', prospectSchema);