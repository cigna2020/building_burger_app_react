import React from 'react';

import styles from './CheckoutSummary.module.css'
import Burger from '../../../components/Burger/Burger';
import Button from '../../UI/Button/Button';


const checkoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients} />
                <Button
                    clicked={props.checkoutCanceld}
                    btnType="Danger">CANCEL</Button>
                <Button clicked={props.checkoutContinued}
                    btnType="Success">CONTINUE</Button>
            </div>
        </div >
    )
}

export default checkoutSummary;