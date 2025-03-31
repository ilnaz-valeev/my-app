import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { useSelector } from "react-redux";

import ThemeSwitcher from "./themeSwitch/ThemeSwitcher"; 


function App() {
  const currentTheme = useSelector((state) => state.theme); // Получаем текущую тему из Redux

  useEffect(() => {
    document.body.className = currentTheme; // Применяем класс к body в зависимости от темы
  }, [currentTheme]);

  return (
    <Router>
      <ThemeSwitcher /> {/* Добавляем кнопку переключателя темы */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
