'use strict';
const mongoose = require('mongoose'),
CovidTravel = mongoose.model('CovidTravel');
exports.list_all = (req, res) => {
  CovidTravel.find({}, (err, covTrav) => {
    if (err)
      res.send(err);
    res.json(covTrav);
  });
};
// exports.create_a_book = (req, res) => {
//   let new_book = new Book(req.body);
//   new_book.save((err, book) => {
//     if (err)
//       res.send(err);
//     res.json(book);
//   });
// };
// exports.read_a_book = (req, res) => {
//   Book.findById(req.params.bookId, (err, book) => {
//     if (err)
//       res.send(err);
//     res.json(book);
//   });
// };
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