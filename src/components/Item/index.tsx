import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Item.module.scss'
import Button from '../Button';
import { ItemType } from '../../redux/slices/itemsSlice';

type ItemPropsType = {
  itemClass?: string;
  count?: number;
  handleClickMinus?: () => void;
  handleClickPlus?: () => void;
  handleAddToCart?: (obj: ItemType, count: number) => void;
  handleChoseItem?: (id: number) => void;
  obj: ItemType;
  ind?: number;
  buttunText: string;
}

const Item: React.FC<ItemPropsType> = ({ obj, ind, handleAddToCart, handleChoseItem, buttunText, count, handleClickPlus, handleClickMinus, itemClass }) => {
  const location = useLocation();


  const [ItemImage, setItemImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      let newImageUrl;
      if (screenSize <= 700) {
        newImageUrl = obj.image.mobile
      } else if (screenSize <= 1150 && location.pathname === '/full-item') {
        newImageUrl = obj.image.tablet
      } else if (screenSize <= 1150 && location.pathname === '/items') {
        newImageUrl = obj.image.tabletGor
      } else {
        newImageUrl = obj.image.desktop
      }
      setItemImage(newImageUrl);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [obj]);








  return (
    <div className={`${styles.item_wrapper} ${ind && ind % 2 !== 0 && styles.even} ${itemClass === 'full' && styles.full}`}>
      <img src={ItemImage} alt="" />
      <div className={styles.item_info}>
        {obj.new && <span>NEW PRODUCT</span>}
        <h1>{obj.name.toUpperCase()}</h1>
        <p>{obj.description}</p>
        {location.pathname === '/full-item' && <h3>$ {obj.price}</h3>}
        <div className={styles.button_box}>
          {location.pathname === '/full-item' ?
            <>
              <div className={styles.counter}>
                <button onClick={handleClickMinus} className={styles.count_button}>-</button>
                <div className={styles.meaning}>{count}</div>
                <button onClick={handleClickPlus} className={styles.count_button}>+</button>
              </div>
              {handleAddToCart && count && <Button
                className={'orange'}
                text={buttunText}
                onClick={() => handleAddToCart(obj, count)} />}
            </> :
            <>
              {handleChoseItem && <Button
                className={'orange'}
                text={buttunText}
                onClick={() => handleChoseItem(obj.id)} />}
            </>

          }

        </div>

      </div>
    </div>
  )
}

export default Item;