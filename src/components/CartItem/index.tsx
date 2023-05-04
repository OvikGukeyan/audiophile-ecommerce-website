import React, { useState } from 'react';
import styles from './CartItem.module.scss';
import { CartItemType } from '../../redux/slices/cartSlice';

type CartItemProps = {
    name: string;
    price: number;
    image: string
}

const CartItem: React.FC<CartItemProps> = (obj) => {
    const [itemCount, setItemCount] = useState(1);
    console.log(obj)
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
                <img src={obj.image} alt="" />
                <div className={styles.text}>
                    <h3>{obj.name}</h3>
                    <span>$ {obj.price}</span>
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