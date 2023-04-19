import React from 'react';
import styles from './Item.module.scss'
import Button from '../Button';
import { ItemType } from '../../redux/slices/itemsSlice';

type ItemPropsType = {
  obj: ItemType;
  ind: number
}

const Item: React.FC<ItemType> = (obj, ind) => {
  return (
    <div className={`${styles.item_wrapper} ${ind % 2 === 0 && styles.even }`}>
        <img src={obj.image.desktop} alt="" />
        <div className={styles.item_info}>
            {obj.new && <span>NEW PRODUCT</span>}
            <h1>{obj.name}</h1>
            <p>{obj.description}</p>
            <Button/>
        </div>
    </div>
  )
}

export default Item;