// ThemeSwitcher.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./actions";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme()); // при нажатии переключаем тему
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Переключить тему (Текущая тема: {currentTheme})
      </button>
    </div>
  );
};

export default ThemeSwitcher;
