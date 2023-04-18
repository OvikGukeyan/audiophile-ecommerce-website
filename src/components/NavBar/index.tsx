import React from 'react';
import styles from './NavBar.module.scss'

const NavBar: React.FC = () => {
    return (
        <div className={styles.nav_bar_wrapper}>
            <div className={styles.nav_bar}>
                <div className={styles.item}>
                    <img src="./assets/shared/desktop/image-headphones.png" alt="" />
                    <h2>HEADPHONES</h2>
                    <p>SHOP <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" /></p>
                </div>
                <div className={styles.item}>
                    <img src="./assets/shared/desktop/image-speakers.png" alt="" />
                    <h2>SPEAKERS</h2>
                    <p>SHOP <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" /></p>
                </div>
                <div className={styles.item}>
                    <img src="./assets/shared/desktop/image-earphones.png" alt="" />
                    <h2>EARPHONES</h2>
                    <p>SHOP <img src="./assets/shared/desktop/icon-arrow-right.svg" alt="" /></p>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar;