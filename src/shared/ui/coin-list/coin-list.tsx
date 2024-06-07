import { FC } from 'react';

import { useAppSelector } from '../../lib';
import { CoinListItem } from '../coin-list-item/coin-list-item';

import styles from './coin-list.module.scss';

type CoinListProps = {
    coins: string[];
    onAddFavourite: (coin: string) => void;
};

export const CoinList: FC<CoinListProps> = ({ coins, onAddFavourite }) => {
    const selectedCoins = useAppSelector((state) => state.coins.selectedCoins);
    return (
        <div className={styles.coinlist}>
            {coins.length === 0 && <div>No coins found</div>}
            {coins.map((coin) => {
                return (
                    <CoinListItem
                        onAddFavourite={onAddFavourite}
                        key={coin}
                        label={coin}
                        isSelected={selectedCoins.includes(coin)}
                    />
                );
            })}
        </div>
    );
};
