//Also we can make button as a re-usable component

// import React from 'react';

// import styles from './Button.module.css';

// const Button = (props) => {
//     // console.log(props.type + "  " + props.onClick + "  " + props.disabled + "  " + props.children)
//     return (
//         <button
//             type={props.type || 'button'}
//             className={`${styles.button} ${props.className}`}
//             onClick={props.onClick}
//             disabled={props.disabled}
//         >
//             {props.children}
//         </button>
//     );
// };

// export default Button;


{/* <Button type="submit" className={classes.btn} > Login </Button> */ }




















/* Explaination ---->
   ------------
  console.log( props.type + "          " + props.onClick + "        " + props.disabled + "         " + props.children)
  
                submit                       undefined                     true                           Login------> Before any action perform

                submit                       undefined                     false                          Login------> Just after Login and Passward validation true

               undefined               onLogout: logoutHandler           undefined                        Logout------> Just after submit form or click on Login button till loggin

                submit                       undefined                     true                           Login------> Just after click on Logout button
 */