import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import styles from './Items.module.scss';
import { Item, Skeleton } from '../../components';
import { ItemType, fetchItems, selectItems } from '../../redux/slices/itemsSlice';
import { selectFilters } from '../../redux/slices/filterSlice';

type ItemsPropsType = {
  handleChoseItem: (obj: ItemType) => void;
}

const Items: React.FC<ItemsPropsType> = ({handleChoseItem}) => {
  const dispatch = useAppDispatch();
  const { itemsArray, isLoaded, loadingRejected } = useSelector(selectItems);
  const { category } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchItems(category?.name));
    window.scrollTo(0, 0)
  }, [category])

  return (
    <div className={styles.items_wrapper}>
      <div className={styles.title_wrapper}>
        <h2>{category?.name.toUpperCase()}</h2>
      </div>
      <div className={styles.items_box}>
        {itemsArray.length ? itemsArray.map((obj, ind) => (<Item
          handleChoseItem={handleChoseItem}
          key={ind}
          obj={obj} 
          ind={ind}
          />)) : <Skeleton/>}
      </div>
    </div>
  )
}

export default Items;