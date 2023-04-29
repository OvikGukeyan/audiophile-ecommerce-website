import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styles from './Header.module.scss';
import { CategoryType } from '../../redux/slices/filterSlice';
import CartPopup from '../CartPopup';

type HeaderPropsType = {
  handleChooseCategory: (category: CategoryType) => void;
  categoryes: CategoryType[];
}

const Header: React.FC<HeaderPropsType> = ({ handleChooseCategory, categoryes }) => {
  
  const [cartOpen, setCartOpen] = useState(false);

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
        <div>
          <img onClick={() => setCartOpen(!cartOpen)} src="./assets/cart-logo.svg" alt="" />
        </div>
      </div>
      {cartOpen && <CartPopup/>}
    </header>
  )
}

export default Header