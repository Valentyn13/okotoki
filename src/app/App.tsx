import { actions } from '../feature/example/model/store/example.store';
import { useAppDispatch, useAppSelector } from '../shared';

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
        </>
    );
};

export default App;
