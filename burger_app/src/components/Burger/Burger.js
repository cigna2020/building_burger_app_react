import React from 'react';

import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // console.log('BURGER:', props);
    let trasformedIngredients = Object.keys(props.ingredients).map(ingrKey => {   // перетворюємо об'єкт 'ingredients' на строку
        return [...Array(props.ingredients[ingrKey])].map((_, index) => {   // отримуємо масив, кількість елементів (інгрідієнтів) залежить від кількості, що вказана в state BurgerBuilder
            return <BurgerIngredient key={ingrKey + index} type={ingrKey} />       // ingrKey = state BurgerBuilder = keys switch.case of BurgerIngredient
        });
    })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);  //  перетворюємо на масив щоб дізнатися довжину
    // console.log(trasformedIngredients);

    if (trasformedIngredients.length === 0) {
        trasformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />

            {trasformedIngredients}

            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;