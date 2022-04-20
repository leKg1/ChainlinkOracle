'use strict';
module.exports = (app) => {
  const covidTravelList = require('../controllers/covidTravelController.js');
  // covidTravel Routes
  app.route('/covidTravel')
    .get(covidTravelList.list_all)
    // .post(covidTravelList.create)
    // .delete(covidTravelList.delete);
  
};