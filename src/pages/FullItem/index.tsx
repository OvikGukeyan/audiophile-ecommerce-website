import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './FullItem.module.scss'
import { Button, Item } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCurrentItemId } from '../../redux/slices/filterSlice';
import { ItemType } from '../../redux/slices/itemsSlice';
import axios from 'axios';

type FullItemPropsType = {
}

const FullItem: React.FC<FullItemPropsType> = () => {
    const [count, setCount] = useState(1);
    const [currentItem, setCurrentItem] = useState<ItemType>();
    const { currentItemId } = useSelector(selectFilters);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://635fcafd3e8f65f283bba8bc.mockapi.io/audiophile?id=${currentItemId}`)
            .then(res => {
                setCurrentItem(res.data[0])
            })
    }, [currentItemId]);
    
    useEffect(() => {
        if (window.location.search) {
            const params = Number(window.location.search.substring(4));
            dispatch(setCurrentItemId(params))
        }
    }, [])

    
    useEffect(() => {
        navigate(`/full-item?id=${currentItemId}`);
    }, [currentItemId]);

    const handleClickPlus = () => {
        setCount(prev => prev + 1)
    }

    const handleClickMinus = () => {
        count > 1 &&
            setCount(prev => prev - 1)
    }

    const handleAddToCart = (id: number) => {

    }
    return (
        <div className={styles.full_item_wrapper}>
            {currentItem && <div className={styles.full_item}>
                <div className={styles.back}>
                    <Link to='/items'>
                        <span>Go Back</span>
                    </Link>
                </div>
                <Item
                    handleClickMinus={handleClickMinus}
                    handleClickPlus={handleClickPlus}
                    count={count}
                    handleButtonClick={handleAddToCart}
                    buttunText={'ADD TO CART'}
                    obj={currentItem} />
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
                    <img className={styles.first} src={currentItem.gallery.first.desktop} alt="" />
                    <img className={styles.second} src={currentItem.gallery.second.desktop} alt="" />
                    <img className={styles.third} src={currentItem.gallery.third.desktop} alt="" />
                </div>
                <div className={styles.also_like}>
                    <h2>YOU MAY ALSO LIKE</h2>
                    <div className={styles.items}>
                        {currentItem.others.map((obj) => (
                            <div className={styles.item_box}>
                                <img src={obj.image.desktop} alt="" />
                                <h3>{obj.name.toUpperCase()}</h3>
                                <Button
                                    className={'orange'}
                                    text={'SEE PRODUCT'} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default FullItem;