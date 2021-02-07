import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            postalCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'Make your choice'},
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'Make your choice',
                validation: {},
                valid: false,
                touched: false,
            },
        },
        loading: false,
        formIsValid: false,
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients)
        this.setState({loading: true})

        const formData = {};
        for (let elem in this.state.orderForm) {
            formData[elem] = this.state.orderForm[elem].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
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

    inputChangedHandler = (event, inputId) => {
        // console.log(event.target.value)
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputId]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputId] = updatedFormElement;
        updatedFormElement.touched = true;
        // console.log(updatedFormElement)
        let formIsValid = true;
        for (let inputId in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputId].valid && formIsValid;
        }
        // console.log(this.state.formIsValid)
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElem =>
                    <Input
                        key={formElem.id}
                        elementType={formElem.config.elementType}
                        elementConfig={formElem.config.elementConfig}
                        value={formElem.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElem.id)}
                        invalid={!formElem.config.valid}
                        shouldValidate={formElem.config.validation}
                        touched={formElem.config.touched}
                        valueType={formElem.config.elementConfig.placeholder}
                    />
                )}
                <Button
                    className={styles.Input}
                    btnType="Success"
                    clicked={this.orderHandler}
                    disabled={!this.state.formIsValid}
                >ORDER</Button>
            </form>
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