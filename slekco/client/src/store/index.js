import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    // we'll add cartReducer later in Task 11
  },
});

export default store;
