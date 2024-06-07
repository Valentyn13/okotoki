import { getCoins } from './actions';
import { actions } from './slice';

const allActions = {
    ...actions,
    getCoins,
};

export { allActions as actions };
export { reducer } from './slice';
