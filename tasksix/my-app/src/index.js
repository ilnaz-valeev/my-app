import React from "react";
import ReactDOM from "react-dom/client"; // Обратите внимание на изменение импорта
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

// Создание корня приложения с использованием createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
