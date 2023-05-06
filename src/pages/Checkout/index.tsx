import React from 'react';
import styles from './Checkout.module.scss'
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
    return (
        <div className={styles.checkout_wrapper}>
            <div className={styles.back}>
                <Link to='/items'>
                    <span>Go Back</span>
                </Link>
            </div>

            <div className={styles.content_wrapper}>

                <div className={styles.checkout_box}>
                    <h1>CHECKOUT</h1>

                    <div className={styles.billing_details}></div>
                </div>
                <div className={styles.summary_box}>

                </div>
            </div>
        </div>
    )
}

export default Checkout