//import { useSelector } from 'react-redux';
import React from "react";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => (store.cart.items));
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="text-white bg-black m-2 p-2 rounded-2xl" onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && <h1 className="text-black font-bold text-2xl mt-2">Cart is empty. Please add items to your cart.</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
            
        </div>
    )
}

export default Cart;