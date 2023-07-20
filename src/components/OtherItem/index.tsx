import React from 'react';

import Button from '../Button';
import styles from './OtherItem.module.scss';
import { otherType } from '../../redux/slices/items/types';

type OtherItemProps = {
    obj: otherType
    handleChoseItem: (id: number) => void
}

const OtherItem: React.FC<OtherItemProps> = ({obj, handleChoseItem}) => {
    return (
        <div className={styles.item_box}>
            <img src={obj.image.desktop} alt="" />
            <h3>{obj.name.toUpperCase()}</h3>
            <Button
                className={'orange'}
                text={'SEE PRODUCT'}
                onClick={() => handleChoseItem(obj.id)}
            />
        </div>
    )
}

export default OtherItem