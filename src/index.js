import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Импортируем Provider
import store from "./themeSwitch/store"; // Импортируем store из нашего файла store.js
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Оборачиваем приложение в Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Если вы хотите начать измерять производительность в вашем приложении, передайте функцию
// для логирования результатов (например, reportWebVitals(console.log))
// или отправьте их на аналитический сервер. Подробнее: https://bit.ly/CRA-vitals
reportWebVitals();
