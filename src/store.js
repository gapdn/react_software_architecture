import { createStore, combineReducers } from "redux";
import { numberOfCLicksReducer } from './reducers';

const rootReducer = combineReducers({
  numberOfClicks: numberOfCLicksReducer,
});

export const store = createStore(rootReducer);
