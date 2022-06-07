import { combineReducers } from "redux";
import sliderData from "../data/sliderData";
import saleData from "../data/saleData";

// Slider Games Data Reducer
const sliderGamesDataReducer = (selectedGame = [], action) => {
  if (action.type === "GAME_SELECT") {
    return [action.payload];
  }
  return selectedGame;
};

export default combineReducers({
  sliderData,
  sliderGamesDataReducer,
  saleData,
});
