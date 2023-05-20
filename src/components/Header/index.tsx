import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import styles from './Header.module.scss';
import { CategoryType } from '../../redux/slices/filterSlice';
import { CartPopup } from '../';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

type HeaderPropsType = {
  handleChooseCategory: (category: CategoryType) => void;
  categoryes: CategoryType[];
};



const Header: React.FC<HeaderPropsType> = ({ handleChooseCategory, categoryes }) => {
  const isMounted = useRef(false);
  const {cartItems} = useSelector(selectCart)



  useEffect(() => {
    if (isMounted.current) {
        const json = JSON.stringify(cartItems);
        localStorage.setItem('cart', json)
    }
    isMounted.current = true;
}, [cartItems])

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/'>
          <div className="logo">
            <img src="./assets/audiophile.png" alt="" />
          </div>
        </Link>

        <nav>
          <ul>
            <Link to='/'>
              <li>HOME</li>
            </Link>
            {categoryes.map((category) => (
              <Link to='/items'>
                <li onClick={() => handleChooseCategory(category)}>{category.name.toUpperCase()}</li>
              </Link>
            ))}
          </ul>
        </nav>
        {<CartPopup />}
      </div>
    </header>
  )
}

export default Header