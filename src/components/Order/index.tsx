import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./Order.module.scss";
import CartItem from '../CartItem';
import Button from '../Button';

type OrderProps = {
    Items: { id: number; name: string; price: number; image: string; count: number; }[];
    grandTotal: number;
    setOrderOpen: (arg: boolean) => void
}

const Order: React.FC<OrderProps> = ({Items, grandTotal, setOrderOpen}) => {
    const orderRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (orderRef.current) {
            if (!orderRef.current.contains(e.target as Node)) {
                setOrderOpen(false);
                document.body.style.overflow = "";
            }
        }
    };

    const onBackToHome = () => {
        navigate('/');
        document.body.style.overflow = "";
    }


  return (
    <div onClick={(e) => handleOutsideClick(e)} className={styles.order_wrapper}>
                        <div ref={orderRef} className={styles.order}>
                            <div className={styles.circle}>
                                <img src="./assets/shared/desktop/Path.png" alt="" />
                            </div>
                            <h1>THANK YOU<br /> FOR YOUR ORDER</h1>
                            <p>You will receive an email confirmation shortly.</p>
                            <div className={styles.order_info}>
                                <div className={styles.order_items}>
                                    <div className={styles.item}>
                                        {Items && <CartItem obj={Items[0]} />}
                                    </div>
                                    {Items.length > 1 && <div className={styles.items_count}>
                                        <p>and {Items.length - 1} other item(s)</p>
                                    </div>}
                                </div>
                                <div className={styles.order_price}>
                                    <p>GRAND TOTAL</p>
                                    <span>{grandTotal.toLocaleString()} $</span>
                                </div>
                            </div>
                            <Button onClick={onBackToHome} text={'BACK TO HOME'} className={'cart'} />
                        </div>
                    </div>
  )
}

export default Order