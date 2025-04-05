import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

// Создание хранилища
const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
