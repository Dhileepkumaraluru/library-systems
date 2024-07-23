const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book');
const computerRoutes = require('./routes/computer');
const borrowerRoutes = require('./routes/borrower');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/library')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);
app.use('/api/computers', computerRoutes);
app.use('/api/borrowers', borrowerRoutes);
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
