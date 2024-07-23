import { createStore } from "redux";
import counterReducer from "./reducers/CounterReducer";
import productReducer from "./reducers/productReducer";


// const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(productReducer, window.__REDUX_DEVTOOLS_EXTENSION__())


export default store