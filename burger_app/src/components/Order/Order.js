import React from 'react-router-dom';

import styles from './Order.module.css'

const order = (props) => (
    <div className={styles.Order}>
        <p>Ingredients: Salad: (1)</p>
        <p>Total price: <strong>Euro 5.55</strong></p>
    </div>
);

export default order;