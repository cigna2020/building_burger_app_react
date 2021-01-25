import React from 'react';

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const trasformedIngredients = Object.keys(props.ingredients).map(ingrKey => {   // перетворюємо об'єкт 'ingredients' на строку
        return [...Array(props.ingredients[ingrKey])].map((_, index) => {   // отримуємо масив, кількість елементів (інгрідієнтів) залежить від кількості, що вказана в state BurgerBuilder
            return <BurgerIngredient key={ingrKey + index} type={ingrKey} />       // ingrKey = state BurgerBuilder = keys switch.case of BurgerIngredient
        });
    });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {trasformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;