import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of products
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingIndex >= 0) {
        // Remove if exists
        state.items.splice(existingIndex, 1);
      } else {
        // Add if not exists
        state.items.push(product);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    }
  }
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
