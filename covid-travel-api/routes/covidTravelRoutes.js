'use strict';
module.exports = (app) => {
  const covidTravelList = require('../controllers/covidTravelController.js');
  // covidTravel Routes
  app.route('/covidTravel')
    // .get(covidTravelList.read_a_info)
    .get(covidTravelList.list_all)
    .post(covidTravelList.create_info)
    // .delete(covidTravelList.delete);
  
};