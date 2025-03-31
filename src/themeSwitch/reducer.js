// reducer.js
import { TOGGLE_THEME } from "./actions";

const initialState = {
  theme: "light", // начальная тема - светлая
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light", // переключение темы
      };
    default:
      return state;
  }
};

export default themeReducer;
