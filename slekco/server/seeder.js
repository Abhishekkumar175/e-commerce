const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const { products } = require('./data/mockData');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear existing products
    await Product.deleteMany();
    console.log('Existing products cleared.');

    // Map the mock data to MongoDB schema (handling isNew -> isNewProduct)
    const seedProducts = products.map((product) => {
      const p = { ...product, isNewProduct: product.isNew };
      delete p.isNew;
      return p;
    });

    // Insert new products
    await Product.insertMany(seedProducts);
    console.log(`Successfully seeded ${seedProducts.length} products to MongoDB!`);

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
