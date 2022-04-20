'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CovidTravelSchema = new Schema({
country_code: {
    type: String,
    required: 'Enter country code'
  },

value: {
    type: [{
        type: String,
        enum: ['true', 'false']
      }],
      default: ['false']
  },

valid_from: {
    type: Date,
    default: Date.now
  },

valid_to: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('CovidTravel', CovidTravelSchema);