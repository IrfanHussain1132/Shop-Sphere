import { ADD_CART,UPDATE_CART,CLEAR_CART,REMOVE_CART } from "./actiontype";

export const addtocart=(item)=>({
    type: ADD_CART,
    payload:item
}
);

export const removefromcart=(itemId)=>({
    type:REMOVE_CART,
    payload:{item,quantity}
});

export const updatecart=(itemId,quantity)=>({
    type:UPDATE_CART,
    payload:{itemId,quantity}
});



export const clearcart=()=>({
    type:CLEAR_CART
})


