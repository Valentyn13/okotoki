import { ChangeEvent, useEffect, useState } from 'react';

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

    const handleAddFavourite = (coin: string) => {
        void dispatch(actions.toggleCoinInActive(coin));
    };
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '') {
            setSearchResults({
                coins: activeTab ? coins : selectedCoins,
                selectedCoins: activeTab ? selectedCoins : coins,
            });
        }
        const result = fuzzySearch(activeTab ? coins : selectedCoins, value);
        setSearchResults({
            coins: activeTab ? result : coins,
            selectedCoins: activeTab ? selectedCoins : result,
        });
    };

    useEffect(() => {
        void dispatch(coinActions.getCoins());
    }, [dispatch]);

    useEffect(() => {
        setSearchResults({
            coins,
            selectedCoins,
        });
    }, [coins, selectedCoins]);

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
                                controll={[
                                    <Button
                                        key={0}
                                        onClick={() => {
                                            setActiveTab(0);
                                        }}
                                    >
                                        <Icon name={IconName.STAR_SOLID} />
                                        FAVORITES
                                    </Button>,
                                    <Button
                                        key={1}
                                        onClick={() => {
                                            setActiveTab(1);
                                        }}
                                    >
                                        ALL COINS
                                    </Button>,
                                ]}
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
