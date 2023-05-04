import React, { useRef, useState, MouseEvent } from 'react';
import styles from './CartPopup.module.scss'
import Button from '../Button';
import { CartItem } from '../';
import { selectCart } from '../../redux/slices/cartSlice';
import { useSelector } from 'react-redux';



const CartPopup: React.FC = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems } = useSelector(selectCart)
    const sortRef = useRef<HTMLDivElement>(null);
    console.log(cartItems)
    console.log(Object.values(cartItems) )

    const handleCartOpen = () => {
        setCartOpen(true)
        document.body.style.overflow = "hidden";
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if (sortRef.current) {
            if (!sortRef.current.contains(e.target as Node)) {
                setCartOpen(false);
                document.body.style.overflow = "";
            }
        }
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
                    {cartItems && Object.values(cartItems).map((obj, ind) => (
                        <CartItem
                            key={ind}
                            {...obj} />
                    ))}
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