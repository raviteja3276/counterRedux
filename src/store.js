import { createStore } from "redux";
import rootReducer from "./combineReducers";


// const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__())


export default store