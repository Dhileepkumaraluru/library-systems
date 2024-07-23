const express = require('express');
const router = express.Router();
const Computer = require('../models/computer');

router.get('/', async (req, res) => {
    try {
        const computers = await Computer.find();
        res.json(computers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const computer = new Computer({
        brand: req.body.brand,
        model: req.body.model,
        serialNumber: req.body.serialNumber,
    });

    try {
        const newComputer = await computer.save();
        res.status(201).json(newComputer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const computer = await Computer.findById(req.params.id);
        if (computer) {
            res.json(computer);
        } else {
            res.status(404).json({ message: 'Computer not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const computer = await Computer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (computer) {
            res.json(computer);
        } else {
            res.status(404).json({ message: 'Computer not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await Computer.findByIdAndDelete(req.params.id);
        if (result) {
            res.json({ message: 'Computer deleted successfully' });
        } else {
            res.status(404).json({ message: 'Computer not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
