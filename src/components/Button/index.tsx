import React from 'react';
import styles from './Button.module.scss'
import { ItemType } from '../../redux/slices/itemsSlice';

type ButtonPropsType = {
  onClick?: () => void;
}

const Button: React.FC<ButtonPropsType> = ({onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>SEE PRODUCT</button>
    )
}

export default Button;