import React, { useEffect, useRef, useState } from 'react';
import styles from './CartPopup.module.scss'
import Button from '../Button';
import { CartItem } from '../';



const CartPopup: React.FC = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const sortRef = useRef<HTMLDivElement>(null);

    const handleCartOpen = () => {
        setCartOpen(true)
        document.body.style.overflow = "hidden";
    }

    const handleOutsideClick = (e: MouseEvent) => {
        sortRef.current &&
            !sortRef.current.contains(e.target as Node) && setCartOpen(false);
            document.body.style.overflow = "";
    };

    


    return (
        <div >
            <img onClick={handleCartOpen} src="./assets/cart-logo.svg" alt="" />
            {cartOpen && <div onClick={(e) => handleOutsideClick(e)} className={styles.popup_wrapper}>
                <div ref={sortRef} className={styles.popup}>
                    <div className={styles.head}>
                        <h3>CART (3)</h3>
                        <span>Remove all</span>
                    </div>
                    <CartItem />
                    <div className={styles.total}>
                        <h2>TOTAL</h2>
                        <span>$ 5000</span>
                    </div>
                    <Button text={'CHECKOUT'} className={'cart'} />
                </div>
            </div>}
        </div>

    )
}

export default CartPopup