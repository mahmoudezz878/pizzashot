import { combineReducers } from "redux";
import foodList from './FoodList';
import Counter from './Counter'

export const reducers = combineReducers({foodList, Counter})