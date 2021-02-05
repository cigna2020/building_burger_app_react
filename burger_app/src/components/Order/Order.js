import React from 'react-router-dom';

import styles from './Order.module.css'

const order = (props) => {

    const ingredients = [];
    for (let ingrName in props.ingredients) {
        ingredients.push({
            name: ingrName,
            amount: props.ingredients[ingrName],
        });
    }

    const ingrOutput = ingredients.map(ingr => {
        return <span
            key={ingr.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>
            {ingr.name}: {ingr.amount};
        </span>
    });

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingrOutput}</p>
            <p>Total price: <strong>Euro {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default order;