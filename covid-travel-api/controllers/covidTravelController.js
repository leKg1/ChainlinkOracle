'use strict';
let CovidTravel = require('../models/covidTravelModels');


const remove_all = (req, res) => {
  console.log('delete all')
  CovidTravel.remove({}, (err, covTrav) => {
    if (err)
      res.send(err);
    res.json(covTrav);
  });
};

/*
 * GET /covidTravel route to retrieve all covidTravel info.
 */
const list_all = (req, res) => {
  CovidTravel.find({}, (err, covTrav) => {
    if (err)
      res.send(err);
    res.json(covTrav);
  });
};

/*
 * POST /covidTravel to save a new covidTravel info.
 */
const create_info = (req, res) => {
  let new_info = new CovidTravel(req.body);
  new_info.save((err, new_info) => {
    if (err) {
      res.send(err);
    }
    else {
    res.json({
      status: "success",
      new_info
    });
    }
  });
};

const read_a_info = (req, res) => {
  CovidTravel.findById(req.params.id, (err, info) => {
    if (err)
      res.send(err);
    res.json(info);
  });
};

const get_filtered_info = (req, res) => {
  const country_code = req.query.country_code;
  console.log("travel_date from url",req.query.travel_date)
  const travel_date = new Date(req.query.travel_date);
  console.log("travel_date as date",travel_date)
  // const valid_to = req.query.valid_to;
  console.log('country_code',country_code)
  CovidTravel.find({
    'country_code': country_code,
    'valid_from': {
      $lte: travel_date
    },
    'valid_to': {
      $gte: travel_date
    }
  }, (err, covTrav) => {
    if (err)
      res.send(err);
      console.log('covTrav',covTrav)
    res.json(covTrav);
  });
};
// exports.update_a_book = (req, res) => {
//  Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, (err, task) => {
//     if (err)
//       res.send(err);
//     res.json(book);
//   });
// };
// exports.delete_a_book = (req, res) => {
//   Book.remove({
//     _id: req.params.bookId
//   }, (err, book) => {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Book successfully deleted' });
//   });
// };

// module.exports = { create_info,read_a_info };
module.exports = { remove_all,list_all, create_info, get_filtered_info };