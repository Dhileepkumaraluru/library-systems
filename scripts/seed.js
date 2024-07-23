const mongoose = require('mongoose');
const path = require('path');
const Book = require(path.resolve(__dirname, '../models/Book'));
const Computer = require(path.resolve(__dirname, '../models/Computer'));
const Borrower = require(path.resolve(__dirname, '../models/Borrower'));

mongoose.connect('mongodb://localhost/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedData = async () => {
  try {
    await Book.deleteMany({});
    await Computer.deleteMany({});
    await Borrower.deleteMany({});
    await Book.insertMany([
      { title: "Sample Book 1", author: "Author One", isbn: "1234567890" },
      { title: "Sample Book 2", author: "Author Two", isbn: "0987654321" }
    ]);
    
    await Computer.insertMany([
      { brand: "Brand A", model: "Model X", serialNumber: "SN123456" },
      { brand: "Brand B", model: "Model Y", serialNumber: "SN654321" }
    ]);

    await Borrower.insertMany([
      { name: "John Doe", email: "john@example.com", borrowedItems: [] },
      { name: "Jane Smith", email: "jane@example.com", borrowedItems: [] }
    ]);

    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedData();
