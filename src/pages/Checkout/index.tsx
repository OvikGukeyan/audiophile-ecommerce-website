import React from 'react';
import styles from './Checkout.module.scss'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Checkout: React.FC = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset } = useForm({
            mode: "onBlur"
        });

    const submitHandler = () => {
        reset();
    }


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
                        <div className={styles.billing_details}>
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
                                    <input className={errors?.firstName && styles.input_error} {...register('firstName', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /[A-Za-z]/,
                                            message: 'Wrong Adress format!'
                                        }
                                    })} />
                                </label>

                                <label >ZIP Code:
                                    {errors?.name && <p>{errors?.lastName?.message?.toString() || 'Wrong format!'}</p>}
                                    <input className={errors?.lastName && styles.input_error} {...register('lastName', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Wrong ZIP code format!'
                                        }
                                    })} />
                                </label>

                                <label>City:
                                    {errors?.emailAddress && <p>{errors?.emailAddress?.message?.toString() || 'Wrong format!'}</p>}
                                    <input className={errors?.emailAddress && styles.input_error} {...register('emailAddress', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /[a-zA-Z]/,
                                            message: 'Wrong City format!'
                                        }
                                    })}  />
                                </label>
                                <label>Country:
                                    {errors?.phoneNumber && <p>{errors?.phoneNumber?.message?.toString() || 'Wrong format!'}</p>}
                                    <input className={errors?.phoneNumber && styles.input_error} {...register('phoneNumber', {
                                        required: 'Required field',
                                        pattern: {
                                            value: /[a-zA-Z]/,
                                            message: 'Wrong Country format!'
                                        }
                                    })}  />
                                </label>
                                
                            </div>
                        </div>
                        <input type="submit" />
                    </form>
                </div>
                <div className={styles.summary_box}>

                </div>
            </div>
        </div>
    )
}

export default Checkout