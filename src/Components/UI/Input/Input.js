import React from "react";
import styles from "./Input.module.css"
import { forwardRef } from "react";

const Input = (props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
}
export default forwardRef(Input);





















//  <div className={styles.input}>
//     <label htmlFor={props.id}>
//         <span>{props.label}</span>
//         <input type={props.type} id={props.id} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
//     </label>
// </div> 