import React, { useState } from 'react';
import styles from './CartItem.module.scss';

const CartItem: React.FC = () => {
    const [itemCount, setItemCount] = useState(1);

    const handleClickPlus = () => {
        setItemCount(prev => prev + 1)
    }

    const handleClickMinus = () => {
        itemCount > 1 &&
        setItemCount(prev => prev - 1)
    }
    return (
        <div className={styles.cart_items}>
            <div className={styles.item}>
                <img src="./assets/product-yx1-earphones/desktop/image-product.jpg" alt="" />
                <div className={styles.text}>
                    <h3>XX99 MK II </h3>
                    <span>$ 2,999</span>
                </div>
                <div className={styles.counter}>
                    <button onClick={handleClickMinus} className={styles.count_button}>-</button>
                    <div className={styles.meaning}>{itemCount}</div>
                    <button onClick={handleClickPlus} className={styles.count_button}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;