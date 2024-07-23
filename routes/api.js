const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Computer = require('../models/computer');
const Borrower = require('../models/borrower');
router.post('/books', (req, res) => {
  const newBook = new Book(req.body);
  newBook.save().then(book => res.json(book)).catch(err => res.status(400).json(err));
});

router.get('/books', (req, res) => {
  Book.find().then(books => res.json(books)).catch(err => res.status(400).json(err));
});

router.get('/books/:id', (req, res) => {
  Book.findById(req.params.id).then(book => res.json(book)).catch(err => res.status(400).json(err));
});

router.put('/books/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(book => res.json(book)).catch(err => res.status(400).json(err));
});

router.delete('/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id).then(() => res.json({ success: true })).catch(err => res.status(400).json(err));
});

router.post('/computers', (req, res) => {
  const newComputer = new Computer(req.body);
  newComputer.save().then(computer => res.json(computer)).catch(err => res.status(400).json(err));
});

router.get('/computers', (req, res) => {
  Computer.find().then(computers => res.json(computers)).catch(err => res.status(400).json(err));
});

router.get('/computers/:id', (req, res) => {
  Computer.findById(req.params.id).then(computer => res.json(computer)).catch(err => res.status(400).json(err));
});

router.put('/computers/:id', (req, res) => {
  Computer.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(computer => res.json(computer)).catch(err => res.status(400).json(err));
});

router.delete('/computers/:id', (req, res) => {
  Computer.findByIdAndDelete(req.params.id).then(() => res.json({ success: true })).catch(err => res.status(400).json(err));
});

router.post('/borrowers', (req, res) => {
  const newBorrower = new Borrower(req.body);
  newBorrower.save().then(borrower => res.json(borrower)).catch(err => res.status(400).json(err));
});

router.get('/borrowers', (req, res) => {
  Borrower.find().then(borrowers => res.json(borrowers)).catch(err => res.status(400).json(err));
});

router.get('/borrowers/:id', (req, res) => {
  Borrower.findById(req.params.id).then(borrower => res.json(borrower)).catch(err => res.status(400).json(err));
});

router.put('/borrowers/:id', (req, res) => {
  Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(borrower => res.json(borrower)).catch(err => res.status(400).json(err));
});

router.delete('/borrowers/:id', (req, res) => {
  Borrower.findByIdAndDelete(req.params.id).then(() => res.json({ success: true })).catch(err => res.status(400).json(err));
});

module.exports = router;
