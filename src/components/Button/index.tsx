import React from 'react';
import styles from './Button.module.scss'


type ButtonPropsType = {
  onClick?: () => void;
  text: string
}

const Button: React.FC<ButtonPropsType> = ({onClick, text}) => {
  return (
    <button onClick={onClick} className={styles.button}>{text}</button>
    )
}

export default Button;