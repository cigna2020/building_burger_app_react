import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 3,
            bacon: 2,
        }
    }

    checkoutCanceldHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/customer-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCanceld={this.checkoutCanceldHandler}
                    checkoutContinued={this.checkoutContinued}
                    ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;