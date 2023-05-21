import React, { useState } from 'react';
import styles from './Checkout.module.scss'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button, CartItem, Order } from '../../components';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

const Checkout: React.FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset } = useForm({
            mode: "onBlur"
        });

    const paymentMethod = watch('payment');
    const { cartItems, totalAmount } = useSelector(selectCart);
    const vat = (totalAmount / 5).toFixed(2);
    const shiping = totalAmount > 5000 ? 0 : 50;
    const grandTotal = totalAmount + shiping;
    const [orderOpen, setOrderOpen] = useState(false);

    const submitHandler = () => {
        reset();
    }

    const handleOrderClick = () => {
        setOrderOpen(true);
        document.body.style.overflow = "hidden";
    };

    
    const Items = Object.values(cartItems).length ? Object.values(cartItems) : [];


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
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <h3>BILLING DETAILS</h3>
                        <div className={styles.input_box}>
                            <label >First Name:
                                {errors?.firstName && <p>{errors?.firstName?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.firstName && styles.input_error} {...register('firstName', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Name must contain at least three letters'
                                    }
                                })} />
                            </label>

                            <label >Last Name:
                                {errors?.lastName && <p>{errors?.lastName?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.lastName && styles.input_error} {...register('lastName', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Name must contain at least three letters'
                                    }
                                })} />
                            </label>

                            <label>Email-Address:
                                {errors?.emailAddress && <p>{errors?.emailAddress?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.emailAddress && styles.input_error} {...register('emailAddress', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                        message: 'Wrong E-mail format!'
                                    }
                                })} type="email" />
                            </label>
                            <label>Phone Number:
                                {errors?.phoneNumber && <p>{errors?.phoneNumber?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.phoneNumber && styles.input_error} {...register('phoneNumber', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^(\+?\d{1,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{2}[-\.\s]?\d{2}$/,
                                        message: 'Wrong Number format!'
                                    }
                                })} type="tel" />
                            </label>

                        </div>

                        <h3>SHIPPING INFO</h3>
                        <div className={styles.input_box}>
                            <label className={styles.adress_input} >Adress:
                                {errors?.adress && <p>{errors?.adress?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.adress && styles.input_error} {...register('adress', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^[a-zA-Z0-9\s,'-]*$/,
                                        message: 'Wrong Adress format!'
                                    }
                                })} />
                            </label>

                            <label >ZIP Code:
                                {errors?.zipCode && <p>{errors?.zipCode?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.zipCode && styles.input_error} {...register('zipCode', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^\d+$/,
                                        message: 'Wrong ZIP code format!'
                                    }
                                })} />
                            </label>

                            <label>City:
                                {errors?.city && <p>{errors?.city?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.city && styles.input_error} {...register('city', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^\D*$/,
                                        message: 'Wrong City format!'
                                    }
                                })} />
                            </label>
                            <label>Country:
                                {errors?.country && <p>{errors?.country?.message?.toString() || 'Wrong format!'}</p>}
                                <input className={errors?.country && styles.input_error} {...register('country', {
                                    required: 'Required field',
                                    pattern: {
                                        value: /^\D*$/,
                                        message: 'Wrong Country format!'
                                    }
                                })} />
                            </label>

                        </div>

                        <h3>PAYMENT DETAILS</h3>
                        <div className={styles.payment}>
                            <p>Payment Method:</p>
                            <div>
                                <label>e-Money
                                    <input  {...register('payment')} type="radio" value="e-Money" />
                                </label>

                                <label>Cash on Delivery
                                    <input  {...register('payment')} type="radio" value="cash" />
                                </label>
                            </div>
                        </div>
                        {paymentMethod === 'e-Money' &&
                            <div className={styles.input_box}>
                                <label>e-Money Number
                                    {errors?.eMoneyNimber && <p>{errors?.eMoneyNimber?.message?.toString() || 'Wrong format!'}</p>}
                                    <input className={errors?.eMoneyNimber && styles.input_error}  {...register('eMoneyNimber', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /^[0-9]{12,19}$/,
                                            message: 'Wrong e-Money Number format!'
                                        }
                                    })} />
                                </label>
                                <label>e-Money PIN
                                    {errors?.eMoneyPin && <p>{errors?.eMoneyPin?.message?.toString() || 'Wrong format!'}</p>}
                                    <input className={errors?.eMoneyPin && styles.input_error} {...register('eMoneyPin', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /^[0-9]{4}$/,
                                            message: 'Wrong PIN format!'
                                        }

                                    })} />
                                </label>
                            </div>
                        }

                        <input type="submit" />
                    </form>
                </div>
                <div className={styles.summary_box}>
                    <h2>SUMMARY</h2>
                    <div className={styles.item_box}>
                        {Items.length && Items.map((obj, ind) => (
                            <CartItem
                                key={ind}
                                obj={obj} />
                        ))
                        }
                    </div>
                    <div className={styles.sum_box}>
                        <p>TOTAL</p>
                        <span>$ {totalAmount.toLocaleString()}</span>
                    </div>
                    <div className={styles.sum_box}>
                        <p>SHIPING</p>
                        <span>$ {shiping}</span>
                    </div>
                    <div className={styles.sum_box}>
                        <p>VAT (INCLUDED)</p>
                        <span>$ {vat.toLocaleString()}</span>
                    </div>
                    <div className={`${styles.sum_box} ${styles.lastSumBox}`}>
                        <p>GRAND TOTAL</p>
                        <span className={styles.orange}>$ {grandTotal.toLocaleString()}</span>
                    </div>
                    <Button onClick={handleOrderClick} text={'CONTINUE & PAY'} className={'cart'} />
                    {orderOpen && <Order Items={Items}
                    grandTotal={grandTotal}
                    setOrderOpen={setOrderOpen}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Checkout