import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0,
        }
    }

    componentDidMount() {
        const ingredients = {};
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
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