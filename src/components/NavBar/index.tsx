import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';
import { CategoryType } from '../../redux/slices/filter/types';

type NavBarPropsType = {
    handleChooseCategory: (category: CategoryType) => void;
    categoryes: CategoryType[];
}

const NavBar: React.FC<NavBarPropsType> = ({ handleChooseCategory, categoryes }) => {
    return (
        <div className={styles.nav_bar_wrapper}>
            <div className={styles.nav_bar}>
                {categoryes.map(category => (
                    <Link key={category.name} to='/items'>
                        <div onClick={() => handleChooseCategory(category)} className={styles.item}>
                            <img src={category.image} alt="" />
                            <h2>{category.name.toUpperCase()}</h2>
                            <p>SHOP <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" /></p>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    )
}

export default NavBar;