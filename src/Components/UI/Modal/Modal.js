import React, { Fragment, useContext } from "react";
import { createPortal } from 'react-dom';
import styles from "./Modal.module.css"
import CartContext from "../../../Store/CartContext";

//for Backdrop section
export const Backdrop = (props) => {

    const cartCTX = useContext(CartContext);

    return (
        <div className={styles.backdrop} onClick={cartCTX.onCloseCart} />
    )
}

//for ModalOverlay section
export const ModalOverlay = (props) => {
    return (
        <div className={styles.modelOverlay}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

//Then became complete Modal

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {createPortal(<Backdrop />, portalElement)};
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)};
        </Fragment>
    )
}
export default Modal;