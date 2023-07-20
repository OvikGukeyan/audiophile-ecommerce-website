import React, { useRef, useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './CartPopup.module.scss'
import Button from '../Button';
import { CartItem } from '../';
import { clearCartItems, itemMinus, itemPlus, selectCart } from '../../redux/slices/cart/cartSlice';



const CartPopup: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems, totalAmount, totalCount } = useSelector(selectCart)
    const cartRef = useRef<HTMLDivElement>(null);
    const location = useLocation()

    const handleCheckoutClick = () => {
        navigate('/checkout');
        setCartOpen(false);
        document.body.style.overflow = "";
    }

    const handleCartOpen = () => {
        setCartOpen(true)
        document.body.style.overflow = "hidden";
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if (cartRef.current) {
            if (!cartRef.current.contains(e.target as Node)) {
                setCartOpen(false);
                document.body.style.overflow = "";
            }
        }
    };

    const handleClearCart = () => {
        dispatch(clearCartItems());
    };

    const handleMinusClick = (id: number) => {
        dispatch(itemMinus(id))
    };

    const handlePlusClick = (id: number) => {
        dispatch(itemPlus(id))
    }







    return (
        <div >
            {location.pathname !== '/checkout' && <img onClick={handleCartOpen} src="./assets/cart-logo.svg" alt="" />}
            {cartOpen && <div onClick={(e) => handleOutsideClick(e)} className={styles.popup_wrapper}>
                <div ref={cartRef} className={styles.popup}>
                    <div className={styles.head}>
                        <h3>CART ({totalCount})</h3>
                        <span onClick={handleClearCart}>Remove all</span>
                    </div>
                    <div className={styles.items}>
                        {Object.values(cartItems).length ? Object.values(cartItems).map((obj, ind) => (
                            <CartItem
                                key={ind}
                                handlePlusClick={handlePlusClick}
                                handleMinusClick={handleMinusClick}
                                obj={obj} />
                        )): 
                        <img className={styles.empty_logo} src="./assets/cart/cart-empty.png" alt="cart-empty" />
                        }
                    </div>

                    <div className={styles.total}>
                        <h2>TOTAL</h2>
                        <span>$ {totalAmount}</span>
                    </div>
                    <Button disable={Object.values(cartItems).length ? false : true} onClick={handleCheckoutClick} text={'CHECKOUT'} className={'cart'} />
                </div>
            </div>}
        </div>

    )
}

export default CartPopup