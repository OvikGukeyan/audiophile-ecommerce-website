import React from 'react';
import styles from './CartPopup.module.scss'
import Button from '../Button';

const CartPopup: React.FC = () => {
    return (
        <div className={styles.popup_wrapper}>
            <div className={styles.popup}>
                <div className={styles.head}>
                    <h3>CART (3)</h3>
                    <span>Remove all</span>
                </div>
                <div className={styles.cart_items}></div>
                <div className={styles.total}>
                    <h2>TOTAL</h2>
                    <span>$ 5000</span>
                </div>
                <Button text={'checkout'} className={'orange'}/>
            </div>
        </div>
    )
}

export default CartPopup