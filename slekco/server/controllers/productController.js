const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');
const { categories } = require('../data/mockData'); // keep categories static for now

// Helper to map DB model to frontend structure (since isNew is reserved in mongoose)
const mapProduct = (doc) => {
  const obj = doc.toObject();
  obj.isNew = obj.isNewProduct;
  delete obj.isNewProduct;
  delete obj._id;
  delete obj.__v;
  return obj;
};

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const { category, search } = req.query;
  
  let query = {};
  
  if (category) {
    query.category = category;
  }
  
  if (search) {
    const term = search.toLowerCase();
    query.$or = [
      { name: { $regex: term, $options: 'i' } },
      { description: { $regex: term, $options: 'i' } },
      { brand: { $regex: term, $options: 'i' } }
    ];
  }
  
  const products = await Product.find(query);
  res.json(products.map(mapProduct));
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ id: req.params.id });
  
  if (product) {
    res.json(mapProduct(product));
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  res.json(categories);
});

module.exports = {
  getProducts,
  getProductById,
  getCategories
};
