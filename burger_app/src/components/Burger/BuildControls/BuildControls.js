import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(el => <BuildControl
            key={el.label}
            label={el.label}
            // type={el.type}
            // added={props.ingredientAdded}
            added={() => props.ingredientAdded(el.type)}
            removed={() => props.ingredientRemoved(el.type)}
            disabled={props.disabled[el.type]}
        />)}
        <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.orderd}
        >ORDER NOW</button>
    </div>

);

export default buildControls;