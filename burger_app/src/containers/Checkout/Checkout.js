import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: null,
        totalPrice: 0,
    }

    componentWillMount() {
        const ingredients = {};
        let price = 0;
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
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
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;