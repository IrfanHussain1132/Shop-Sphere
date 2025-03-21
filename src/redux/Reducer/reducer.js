import { ADD_CART,REMOVE_CART,UPDATE_CART,CLEAR_CART } from "../actions.js/actiontype";


const initialstate={
    items:[]
};

const cartreducer = (state=initialstate,action)=>{
    switch(action.type){
        case ADD_CART:
            return {
                ...state,
                items: [...state.items,action.payload]
            };
        case REMOVE_CART:
            return{
                ...state,
                items: state.items.filter(item=>item.id !== action.payload)
            };
        case UPDATE_CART:
            return{
                ...state,
                items: state.items.map(item=>{
                    item.id===action.payload.itemId ? {...item, quantity:action.payload.quantity}:item
                })
            };
        case CLEAR_CART:
            return{
                ...state,
                items:[]
            };
            default:
                return state;

    }
}



export default cartreducer;