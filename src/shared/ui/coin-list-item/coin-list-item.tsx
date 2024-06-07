import { FC } from 'react';
import clsx from 'clsx';

import { IconName } from '../../constants';
import { CoinLabel } from '../coin-label/coin-label';
import { Icon } from '../icon/icon';

import styles from './coin-list-item.module.scss';

type CoinListItemProps = {
    label: string;
    isSelected?: boolean;
    className?: string;
    onAddFavourite: (coin: string) => void;
};

export const CoinListItem: FC<CoinListItemProps> = ({
    label,
    isSelected = false,
    onAddFavourite,
    className = '',
}) => {
    const handleAddFavourite = () => {
        onAddFavourite(label);
    };
    return (
        <div className={clsx(styles.listItem, className)}>
            <Icon
                onClick={handleAddFavourite}
                name={isSelected ? IconName.STAR_SOLID : IconName.STAR_REGULAR}
                color="lightgray"
                className={styles.pointer}
            />
            <CoinLabel>{label}</CoinLabel>
        </div>
    );
};
