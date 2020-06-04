import { combineReducers } from "redux";
import sliderArrowReducer from "./sliderArrowReducer";

const allReducers = combineReducers({
  slider: sliderArrowReducer,
});
export default allReducers;
