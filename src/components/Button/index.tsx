import React from 'react';
import styles from './Button.module.scss'


type ButtonPropsType = {
  onClick?: () => void;
  text: string
  className: string
}

const Button: React.FC<ButtonPropsType> = ({onClick, text, className}) => {
  console.log(className)
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[className]}`}>{text}</button>
    )
}

export default Button;