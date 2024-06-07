import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import {
    actions,
    actions as coinActions,
} from '../entities/coins/model/store/coins-store';
import {
    Button,
    CoinList,
    DropDownLayout,
    fuzzySearch,
    Icon,
    IconInput,
    IconName,
    Input,
    Tabs,
    useAppDispatch,
    useAppSelector,
} from '../shared';

import './styles/index.scss';

const App = () => {
    const dispatch = useAppDispatch();

    const { coins, selectedCoins } = useAppSelector((state) => state.coins);

    const [dropActive, setDropActive] = useState(false);
    const [activeTab, setActiveTab] = useState<number>(1);
    const [searchResults, setSearchResults] = useState({
        coins,
        selectedCoins,
    });

    const handleAddFavourite = useCallback(
        (coin: string) => {
            void dispatch(actions.toggleCoinInActive(coin));
        },
        [dispatch],
    );

    const handleSearch = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (value === '') {
                setSearchResults({
                    coins: activeTab ? coins : selectedCoins,
                    selectedCoins: activeTab ? selectedCoins : coins,
                });
            }
            const result = fuzzySearch(
                activeTab ? coins : selectedCoins,
                value,
            );
            setSearchResults({
                coins: activeTab ? result : coins,
                selectedCoins: activeTab ? selectedCoins : result,
            });
        },
        [activeTab, coins, selectedCoins],
    );

    const handleFirstTabClick = useCallback(() => {
        setActiveTab(0);
    }, []);

    const handleSecondTabClick = useCallback(() => {
        setActiveTab(1);
    }, []);

    useEffect(() => {
        void dispatch(coinActions.getCoins());
    }, [dispatch]);

    useEffect(() => {
        setSearchResults({
            coins,
            selectedCoins,
        });
    }, [coins, selectedCoins]);

    const tabButtons = useMemo(
        () => [
            {
                label: 'FAVORITES',
                withIcon: true,
                onClick: handleFirstTabClick,
            },
            {
                label: 'ALL COINS',
                withIcon: false,
                onClick: handleSecondTabClick,
            },
        ],
        [],
    );

    return (
        <>
            <div className="applayout">
                <div className="relative">
                    <Button
                        active={dropActive}
                        onClick={() => setDropActive(!dropActive)}
                    >
                        <Icon name={IconName.SEARCH} />
                        search
                    </Button>
                    {dropActive && (
                        <DropDownLayout>
                            <IconInput
                                prependedIcon={<Icon name={IconName.SEARCH} />}
                                input={
                                    <Input
                                        onChange={handleSearch}
                                        placeholder="Search..."
                                    />
                                }
                            />
                            <Tabs
                                buttons={tabButtons}
                                content={
                                    <CoinList
                                        onAddFavourite={handleAddFavourite}
                                        coins={
                                            activeTab
                                                ? searchResults.coins
                                                : searchResults.selectedCoins
                                        }
                                    />
                                }
                            />
                        </DropDownLayout>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
