import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние для продуктов
const initialState = {
  products: [],
};

// Создаем слайс для продуктов
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
      }
    },
    toggleAvailability: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products[index].available = !state.products[index].available;
      }
    },
  },
});

// Экспортируем действия
export const { addProduct, removeProduct, updateProduct, toggleAvailability } =
  productsSlice.actions;

// Экспортируем редуктор
export default productsSlice.reducer;
