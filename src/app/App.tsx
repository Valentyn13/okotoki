import { useEffect, useState } from 'react';

import { actions as coinActions } from '../entities/coins/model/store/coins-store';
import {
    Button,
    DropDownLayout,
    Icon,
    IconName,
    Input,
    Tabs,
    useAppDispatch,
} from '../shared';
import { IconInput } from '../shared/ui/icon-input/icon-input';

import './styles/index.scss';

const App = () => {
    const dispatch = useAppDispatch();

    const [dropActive, setDropActive] = useState(false);

    useEffect(() => {
        void dispatch(coinActions.getCoins());
    }, [dispatch]);

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
                                input={<Input placeholder="Search..." />}
                            />
                            <Tabs />
                        </DropDownLayout>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
