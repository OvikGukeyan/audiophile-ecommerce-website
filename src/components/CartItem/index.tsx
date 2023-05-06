import React, { useState } from 'react';
import styles from './CartItem.module.scss';

type CartItemProps = {
    obj: {
        id: number;
        name: string;
        price: number;
        image: string;
        count: number;
    };
    handleMinusClick: (id: number) => void;
    handlePlusClick: (id: number) => void;

}

const CartItem: React.FC<CartItemProps> = ({ obj, handleMinusClick, handlePlusClick }) => {
    
    return (
        <div className={styles.item}>
            <img src={obj.image} alt="" />
            <div className={styles.text}>
                <h3>{obj.name}</h3>
                <span>$ {obj.price}</span>
            </div>
            <div className={styles.counter}>
                <button onClick={() => handleMinusClick(obj.id)} className={styles.count_button}>-</button>
                <div className={styles.meaning}>{obj.count}</div>
                <button onClick={() => handlePlusClick(obj.id)} className={styles.count_button}>+</button>
            </div>
        </div>
    )
}

export default CartItem;