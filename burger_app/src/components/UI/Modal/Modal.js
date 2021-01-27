import React, {Component} from 'react';

import styles from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    // componentDidUpdate() {
    //     console.log('[Modal] DidUpdate')
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.show !== this.props.show) {
        //     return true;
        // } else {return false}
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children} </div>
            </Aux>
        );
    }
}

export default Modal;