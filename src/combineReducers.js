import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import counterReducer from "./reducers/CounterReducer";


const rootReducer = combineReducers({
    count : counterReducer,
    product: productReducer
});

export default rootReducer