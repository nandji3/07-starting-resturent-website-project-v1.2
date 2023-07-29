import React, { Fragment } from 'react'
import styles from "./Header.module.css"
import mealImage from '../../../Assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles.mainImage}>
                <img src={mealImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    )
}
export default Header
