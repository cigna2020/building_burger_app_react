import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css'
import axios from '../../../axios-orders';

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
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                <from>
                    <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={styles.Input} type="email" name="email" placeholder="Your Mail" />
                    <input className={styles.Input} type="text" name="street" placeholder="Your Street" />
                    <input className={styles.Input} type="text" name="postal" placeholder="Your Postal code" />
                    <Button className={styles.Input} btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </from>
            </div>
        );
    }
};

export default ContactData;