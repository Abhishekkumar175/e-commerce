import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../store/productSlice';
import ProductCard from '../components/ui/ProductCard';
import { SlidersHorizontal, Search } from 'lucide-react';

const categoriesList = ['All', 'Fashion', 'Electronics', 'Home', 'Beauty', 'Accessories'];

const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { items, status, error } = useSelector((state) => state.products);
  
  // URL Params State
  const searchTerm = searchParams.get('search') || '';
  const currentCategory = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Handle Filtering & Sorting Locally
  const filteredItems = items.filter((product) => {
    const matchesCategory = currentCategory === 'All' || product.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0; // 'featured' default
  });

  const handleCategoryChange = (cat) => {
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat.toLowerCase());
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    if (e.target.value) {
      newParams.set('search', e.target.value);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', e.target.value);
    setSearchParams(newParams);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
        <div>
          <h1 className="text-4xl font-display font-bold text-primary mb-2">Shop Collection</h1>
          <p className="text-secondary text-sm">Showing {filteredItems.length} products</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 border border-border bg-surface text-sm focus:outline-none focus:border-primary w-full md:w-64"
            />
          </div>
          <div className="relative flex items-center border border-border px-3 py-2 bg-surface">
            <SlidersHorizontal className="w-4 h-4 text-secondary mr-2" />
            <select 
              value={sort} 
              onChange={handleSortChange}
              className="bg-transparent text-sm focus:outline-none appearance-none cursor-pointer pr-4"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Categories */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Categories</h3>
            <ul className="space-y-4">
              {categoriesList.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm transition-colors ${currentCategory.toLowerCase() === cat.toLowerCase() ? 'text-primary font-medium' : 'text-secondary hover:text-primary'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {status === 'loading' && <div className="text-center text-secondary py-20">Loading collection...</div>}
          {status === 'failed' && <div className="text-center text-red-500 py-20">{error}</div>}
          
          {status === 'succeeded' && filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl text-primary mb-2">No products found</h3>
              <p className="text-secondary text-sm">Try adjusting your filters or search term.</p>
            </div>
          )}

          {status === 'succeeded' && filteredItems.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filteredItems.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
