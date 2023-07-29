import React, { useReducer, useState } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {

        //Processe for adding new item and increse the quantity of exising item
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.quantity;
        //Processe for adding new item and increse the quantity of exising item
        const existingCartItemIndex = state.items.findIndex((item) => (item.id === action.item.id));

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + action.item.quantity };

            updatedItems = [...state.items];  //create copywrite of all exising items in current state
            updatedItems[existingCartItemIndex] = updatedItem;  //update existing index data
        }
        else {
            updatedItems = state.items.concat(action.item);  //this give all updatedItems in new new copy of array, because .concate() method create a new copy of array after adding new items in oldArray --So we can easily calculate updatedTotalAmount of items.
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => (item.id === action.id));

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);  //if we click on delete in this the existing one item it completely deleted from cart
        }
        else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}


const CartProvider = ({ children }) => {

    //These all object properties for manage the cart Model() and HeaderCartButton open/close
    const [cartIsShown, setCartIsShown] = useState(false);   //state is used to manage open and close cart Model

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

    //These all object properties for manage the cartProudcts and total cartItem which is show in cart

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };


    const cartContext = {

        //These all object properties for manage the cart Model and HeaderCartButton open/close
        showCart: showCartHandler,
        closeCart: hideCartHandler,
        cartIsShown: cartIsShown,

        //These all object properties for manage the cartProudcts and total cartItem which is show in cart
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;