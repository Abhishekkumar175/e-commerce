const express = require('express');
const router = express.Router();
const { getProducts, getProductById, getCategories } = require('../controllers/productController');

// Categories route needs to be mounted before /:id if they share a root router, 
// or mounted separately. I'll define it clearly here.
router.route('/categories').get(getCategories);

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

module.exports = router;
