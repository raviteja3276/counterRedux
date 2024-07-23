import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actions/ActionType";

const initialState={
    products:[]
}

const productReducer = (state=initialState, action)=>{
    console.log(action,'ac')
    switch (action.type) {
        case ADD_TO_CARD:
            return {
                ...state,
                products: [...state.products,action.payload]
            };
        case REMOVE_FROM_CARD:
            return {
                ...state,
                products: state.products.filter(data=> data.id !== action.payload.id)
            }
    
        default:
            return state
    }
}

export default productReducer