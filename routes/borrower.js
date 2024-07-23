const express = require('express');
const router = express.Router();
const Borrower = require('../models/borrower');
router.get('/', async (req, res) => {
    try {
        const borrowers = await Borrower.find().populate('borrowedItems');
        res.json(borrowers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const borrower = new Borrower({
        name: req.body.name,
        email: req.body.email,
        borrowedItems: req.body.borrowedItems || []  
    });

    try {
        const newBorrower = await borrower.save();
        res.status(201).json(newBorrower);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const borrower = await Borrower.findById(req.params.id).populate('borrowedItems');
        if (borrower) {
            res.json(borrower);
        } else {
            res.status(404).json({ message: 'Borrower not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (borrower) {
            res.json(borrower);
        } else {
            res.status(404).json({ message: 'Borrower not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await Borrower.findByIdAndDelete(req.params.id);
        if (result) {
            res.json({ message: 'Borrower deleted successfully' });
        } else {
            res.status(404).json({ message: 'Borrower not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
