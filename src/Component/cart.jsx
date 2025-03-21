import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './cart.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="topleftcart">
                <div className="topleftcarttit">Shopping Cart</div>
                <div className="deselct">Deselect all items</div>
                <div className="pricetxt">Price</div>

                <div className="cartitemsdiv">
                    {cartItems.map((item, ind) => (
                        <div className="itemblock" key={item.id || ind}>
                            <div className="leftblock">
                                <div className="blockimage">
                                    <img
                                        src={item.imageUrl}

                                        className="cartimg"
                                    />
                                </div>
                                <div className="blockdetails">
                                    <div className="cartname">{item.name}</div>
                                    <div className="instock">In stock</div>
                                    <div className="elgfree">Eligible for FREE Shipping</div>
                                    <div className="filledimg">
                                        <img
                                            className="fillfull"
                                            src="https://m.media-amazon.com/images/G/31/easyship-SVDRVS/amazon-delivered-DSVVSR._CB485933315_.png"
                                            alt="Free Delivery"
                                        />
                                        Free Delivery
                                    </div>
                                    <div
                                        className="removecart"
                                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                                    >
                                        Remove from Basket
                                    </div>
                                </div>
                            </div>

                            <div className="rightblock">Rs {item.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="toprightcart">
                <div className="subtotal">
                    Subtotal ({cartItems.length} items): <span className="subtotalspan">
                        Rs {cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0)}
                    </span>

                </div>
                <div className="giftadd">
                    <input type="checkbox" />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="probut">Proceed to Buy</div>
            </div>
        </div>
    );
};

export default Cart;
