import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../Store/CartContext";

const Cart = () => {

    const cartCTX = useContext(CartContext)

    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

    const hasItems = cartCTX.items.length > 0; //if items present then return true else false

    const cartItemRemoveHandler = (id) => {
        cartCTX.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCTX.addItem({ ...item, quantity: 1 });
    }

    const cartItems = <ul className={styles.cartItems}>
        {cartCTX.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
    </ul>;

    return (
        <Modal >
            {cartItems}
            < div className={styles.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </ div>
            <div className={styles.actions}>
                <button className={styles.buttonClose} onClick={cartCTX.closeCart}>Close</button>
                {hasItems && <button className={styles.buttonOrder}>Order</button>}
            </div>
        </Modal >
    )
}
export default Cart;














//Note -
    // onAdd={(event) => cartItemAddHandler(item, event)}
    //Alao we can use below method in place of above two lines
    // onRemove={cartItemRemoveHandler.bind(null, item.id)}
    // onAdd={cartItemAddHandler.bind(null, item)}
    //when you call it with onfilechange.bind(null, playsound), it creates and returns a new function, always receiving playsound as first argument.
    //When we call .bind(), it returns a function, not it's result, so this function can be used in future (On event dispatch in our case). Event object is passed by browser.