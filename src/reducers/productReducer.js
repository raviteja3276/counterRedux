import { ADD_TO_CARD, DECREASE_BY, INCREASE_BY, REMOVE_ALL_CART, REMOVE_FROM_CARD } from "../actions/ActionType";

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    const existingCartRecord = state.products.find(data => data.id === action.payload.id);
    console.log(existingCartRecord)
    switch (action.type) {
        case ADD_TO_CARD:
            if (existingCartRecord) {
                return {
                    ...state,
                    products: state.products.map(data =>
                        data.id === existingCartRecord.id
                            ? { ...data, quantity: data.quantity + 1 }
                            : data
                    )
                }
            }
            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1 }]
            };
        case REMOVE_FROM_CARD:
            return {
                ...state,
                products: state.products.filter(data => data.id !== action.payload.id)
            }

        case INCREASE_BY:
            return {
                ...state,
                products: state.products.map(data=>{
                    if(data.id === action.payload.id){
                        return{
                            ...data,
                            quantity: data.quantity + 1
                        }
                    }
                    return data
                })
            }
        case DECREASE_BY:
            return{
                ...state,
                products: state.products.map(data=>{
                    if(data.id === action.payload.id){
                        return{
                            ...data,
                            quantity: data.quantity - 1
                        }
                    }
                    return data
                }).filter(da=> da.quantity > 0)
            }
        
        case REMOVE_ALL_CART:{
            return{
                ...state,
                products: action.payload
            }
        }

        default:
            return state
    }
}

export default productReducer