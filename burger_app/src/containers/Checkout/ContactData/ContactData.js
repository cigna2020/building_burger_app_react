import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients)
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Alex Tsyg',
                address: {
                    street: 'Teststreen, 1',
                    zipCode: '03422'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let form = (
            <from>
                <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
                <input className={styles.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={styles.Input} type="text" name="street" placeholder="Your Street" />
                <input className={styles.Input} type="text" name="postal" placeholder="Your Postal code" />
                <Button className={styles.Input} btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </from>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
};

export default ContactData;