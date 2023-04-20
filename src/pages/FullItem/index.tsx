import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FullItem.module.scss'
import { Button, Item } from '../../components';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/slices/filterSlice';

const FullItem: React.FC = () => {
    const { currentItem } = useSelector(selectFilters)
    return (
        <div className={styles.full_item_wrapper}>
            <div className={styles.full_item}>
                <div className={styles.back}>
                    <Link to='/items'>
                        <span>Go Back</span>
                    </Link>
                </div>
                {currentItem && <Item obj={currentItem}/>}
                <div className={styles.about}>
                    <div className={styles.features}>
                        <h2>FEATURES</h2>
                        <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
                        <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                    </div>
                    <div className={styles.in_the_box}>
                        <h2>IN THE BOX</h2>
                        <ul>
                            <li><span>1x</span> Replacement Earcups</li>
                            <li><span>1x</span>Replacement Earcups</li>
                            <li><span>1x</span>Replacement Earcups</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.image_box}>
                    <img className={styles.first} src="./assets/product-yx1-earphones/desktop/image-gallery-1.jpg" alt="" />
                    <img className={styles.second} src="./assets/product-yx1-earphones/desktop/image-gallery-2.jpg" alt="" />
                    <img className={styles.third} src="./assets/product-yx1-earphones/desktop/image-gallery-3.jpg" alt="" />
                </div>
                <div className={styles.also_like}>
                    <h2>YOU MAY ALSO LIKE</h2>
                    <div className={styles.items}>
                        <div className={styles.item_box}>
                            <img src="./assets/shared/desktop/image-xx99-mark-one-headphones.jpg" alt="" />
                            <h3>XX99 MARK I</h3>
                            <Button />
                        </div>
                        <div className={styles.item_box}>
                            <img src="./assets/shared/desktop/image-xx99-mark-one-headphones.jpg" alt="" />
                            <h3>XX99 MARK I</h3>
                            <Button />
                        </div>
                        <div className={styles.item_box}>
                            <img src="./assets/shared/desktop/image-xx99-mark-one-headphones.jpg" alt="" />
                            <h3>XX99 MARK I</h3>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullItem;