'use strict';
let CovidTravel = require('../models/covidTravelModels');

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
module.exports = { list_all, create_info };