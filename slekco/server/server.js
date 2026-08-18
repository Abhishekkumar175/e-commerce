const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const productRoutes = require('./routes/productRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
// We can mount categories separately or let productRoutes handle /api/products/categories.
// Let's mount the same router for /api/categories for cleanliness, or just rely on the router.
app.use('/api/categories', (req, res, next) => {
  req.url = '/categories';
  productRoutes(req, res, next);
});

app.get('/', (req, res) => {
  res.send('Slekco API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
