const { products, categories } = require('../data/mockData');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = (req, res) => {
  // Can add basic filtering here for future tasks
  const { category, search } = req.query;
  
  let result = [...products];
  
  if (category) {
    result = result.filter(p => p.category === category);
  }
  
  if (search) {
    const term = search.toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.description.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    );
  }
  
  res.json(result);
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = (req, res) => {
  res.json(categories);
};

module.exports = {
  getProducts,
  getProductById,
  getCategories
};
