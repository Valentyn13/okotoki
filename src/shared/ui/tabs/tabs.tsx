import { useState } from 'react';

import { actions } from '../../../entities/coins/model/store/coins-store';
import { IconName } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../lib';
import { Button } from '../button/button';
import { CoinList } from '../coin-list/coin-list';
import { Icon } from '../icon/icon';

import styles from './tabs.module.scss';

export const Tabs = () => {
    const dispatch = useAppDispatch();
    const [activeTab, setActiveTab] = useState<number>(1);

    const { coins, selectedCoins } = useAppSelector((state) => state.coins);

    const handleAddFavourite = (coin: string) => {
        dispatch(actions.toggleCoinInActive(coin));
    };

    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__buttons}>
                <Button
                    onClick={() => {
                        setActiveTab(0);
                    }}
                >
                    <Icon name={IconName.STAR_SOLID} />
                    FAVORITES
                </Button>
                <Button
                    onClick={() => {
                        setActiveTab(1);
                    }}
                >
                    ALL COINS
                </Button>
            </div>

            <div className={styles.tabs__item_content}>
                <CoinList
                    onAddFavourite={handleAddFavourite}
                    coins={activeTab ? coins : selectedCoins}
                />
            </div>
        </div>
    );
};
