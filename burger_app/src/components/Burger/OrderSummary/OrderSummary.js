import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // componentDidUpdate() {
    //     console.log('[OrderSummary] DidUpdate')  // Не обновляється, так як в обгортці (Модал) використано shouldComponentUpdate
    // }

    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients).map(ingrKey => {
            return (
                <li key={ingrKey}><span style={{textTransform: 'capitalize'}}>{ingrKey}</span>: {this.props.ingredients[ingrKey]}</li>
            )
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul >
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} Euro</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
};


export default OrderSummary;