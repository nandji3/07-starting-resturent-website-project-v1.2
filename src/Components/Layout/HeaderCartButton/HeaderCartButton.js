import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../Store/CartContext";

const HeaderCartButton = (props) => {

    const cartCTX = useContext(CartContext);

    const numberOfCartItem = cartCTX.items.reduce((currNumber, item) => {
        return (currNumber + item.quantity)
    }, 0)

    return (
        <button className={styles.button} onClick={cartCTX.showCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItem}
            </span>
        </button>
    )
}
export default HeaderCartButton;

