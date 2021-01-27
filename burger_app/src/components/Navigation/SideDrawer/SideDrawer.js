import React from 'react';

import Logo from '../../Burger/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close]

    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                {/* <Logo height={"11%"} /> */}
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav><NavItems /></nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;