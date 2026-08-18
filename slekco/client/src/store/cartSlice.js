import { createSlice, current } from '@reduxjs/toolkit';

// Helper to save to local storage
const saveToLocalStorage = (state) => {
  try {
    const plainState = current(state);
    const serializedState = JSON.stringify(plainState);
    localStorage.setItem('slekco_cart', serializedState);
  } catch (e) {
    console.warn("Could not save cart to local storage", e);
  }
};

// Helper to load from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('slekco_cart');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load cart from local storage", e);
    return undefined;
  }
};

const initialState = loadFromLocalStorage() || {
  items: [], // Array of { product, quantity }
  totalQuantity: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
};

const calculateTotals = (state) => {
  state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  state.subtotal = state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  // Free shipping over $200, otherwise $15
  state.shipping = state.subtotal > 200 || state.subtotal === 0 ? 0 : 15;
  state.total = state.subtotal + state.shipping;
  saveToLocalStorage(state);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Prevent exceeding stock
        const newQuantity = existingItem.quantity + quantity;
        existingItem.quantity = newQuantity > product.stock ? product.stock : newQuantity;
      } else {
        state.items.push({ product, quantity });
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.product.id !== id);
      calculateTotals(state);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.product.id === id);
      if (existingItem && existingItem.quantity < existingItem.product.stock) {
        existingItem.quantity += 1;
      }
      calculateTotals(state);
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.product.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      calculateTotals(state);
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
