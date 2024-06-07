import { useState } from 'react';

import { actions as coinActions } from '../entities/coins/model/store/coins-store';
import {
    Button,
    CoinLabel,
    CoinListItem,
    DropDownLayout,
    Icon,
    IconName,
    Tabs,
    useAppDispatch,
    useAppSelector,
} from '../shared';

import './styles/index.scss';

const App = () => {
    const dispatch = useAppDispatch();
    const { coins } = useAppSelector((state) => state.coins);

    const [dropActive, setDropActive] = useState(false);

    const handleClick = () => {
        void dispatch(coinActions.getCoins());
    };
    return (
        <>
            <h1>Hello world!!!</h1>
            <button onClick={handleClick}>get data</button>
            {coins.length > 0 && <p>{JSON.stringify(coins)}</p>}
            <br />
            <Icon name={IconName.SEARCH} />
            <Icon name={IconName.STAR_REGULAR} />
            <Icon name={IconName.STAR_SOLID} />
            <br />
            <div style={{ backgroundColor: 'black', padding: '20px' }}>
                <Button active={true} onClick={() => {}}>
                    <Icon name={IconName.SEARCH} />
                    click
                </Button>
                <Button onClick={() => {}}>
                    <Icon name={IconName.SEARCH} />
                    click
                </Button>
                <br />
                <br />
                <CoinListItem label="BTC" />
                <CoinListItem label="ETH" isSelected />
                <CoinListItem label="BTC" />
                <CoinListItem label="BTC" isSelected />
                <br />
                <br />
                <br />
                <br />
                {/* <Tabs/> */}
                <br />
                <br />
                <div style={{ marginLeft: '300px' }}>
                    <div
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                        }}
                    >
                        <Button
                            active={dropActive}
                            onClick={() => setDropActive(!dropActive)}
                        >
                            <Icon name={IconName.SEARCH} />
                            search
                        </Button>
                        {dropActive && (
                            <DropDownLayout toggleElement={<Tabs />} />
                        )}
                    </div>
                </div>
            </div>

            <CoinLabel>40000USDT</CoinLabel>
        </>
    );
};

export default App;
