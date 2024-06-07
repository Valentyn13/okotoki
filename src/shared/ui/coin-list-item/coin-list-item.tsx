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
};

export const CoinListItem: FC<CoinListItemProps> = ({
    label,
    isSelected = false,
    className = '',
}) => {
    return (
        <div className={clsx(styles.listItem, className)}>
            <Icon
                name={isSelected ? IconName.STAR_SOLID : IconName.STAR_REGULAR}
            />
            <CoinLabel>{label}</CoinLabel>
        </div>
    );
};
