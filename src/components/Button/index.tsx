import React from 'react';
import styles from './Button.module.scss'


type ButtonPropsType = {
  onClick?: () => void;
  text: string
  className: string
}

const Button: React.FC<ButtonPropsType> = ({onClick, text, className}) => {
  return (
    <button onClick={onClick} className={`${className === 'black' && styles.black || className === 'orange' && styles.orange || className === 'transparent' && styles.transparent} ${styles.button}`}>{text}</button>
    )
}

export default Button;