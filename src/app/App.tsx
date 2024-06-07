import { actions } from '../feature/example/model/store/example.store';
import { Icon, IconName, useAppDispatch, useAppSelector } from '../shared';

import './styles/index.scss';

const App = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.example.data);

    const handleClick = () => {
        void dispatch(actions.getExampleData());
    };
    return (
        <>
            <h1>Hello world!!!</h1>
            <button onClick={handleClick}>get data</button>
            {data && <p>{JSON.stringify(data)}</p>}
            <br />
            <Icon name={IconName.SEARCH} />
            <Icon name={IconName.STAR_REGULAR} />
            <Icon name={IconName.STAR_SOLID} />
        </>
    );
};

export default App;
