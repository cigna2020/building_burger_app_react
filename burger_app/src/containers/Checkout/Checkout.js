import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

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
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCanceld={this.checkoutCanceldHandler}
                    checkoutContinued={this.checkoutContinued}
                    ingredients={this.state.ingredients} />
                {/* <Route path={'/checkout/contact-data'} component={ContactData} /> */}
                {/* <Route path={this.props.match.path + '/contact-data'} component={ContactData} /> */}
                <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} />)} />
            </div>
        );
    }
}

export default Checkout;