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
                <div className={styles.cart_items}>
                    <div className={styles.item}>
                        <img src="./assets/product-yx1-earphones/desktop/image-product.jpg" alt="" />
                        <div className={styles.text}>
                            <h3>XX99 MK II </h3>
                            <span>$ 2,999</span>
                        </div>
                        <div className={styles.counter}>
                            <button className={styles.count_button}>-</button>
                            <div className={styles.meaning}>0</div>
                            <button className={styles.count_button}>+</button>
                        </div>
                    </div>
                </div>
                <div className={styles.total}>
                    <h2>TOTAL</h2>
                    <span>$ 5000</span>
                </div>
                <Button text={'CHECKOUT'} className={'cart'} />
            </div>
        </div>
    )
}

export default CartPopup