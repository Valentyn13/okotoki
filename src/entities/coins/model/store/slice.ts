import { createSlice } from '@reduxjs/toolkit';

import { SliceState } from '../../../../shared';

import { getCoins } from './actions';

type State = {
    state: SliceState;
    error: string | null;
    coins: string[];
};

const initialState: State = {
    state: SliceState.IDLE,
    error: null,
    coins: [],
};

const { reducer, actions, name } = createSlice({
    initialState,
    name: 'coins',
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCoins.fulfilled, (state, action) => {
            state.state = SliceState.LOADING;
            state.coins = action.payload;
        });
        builder.addCase(getCoins.pending, (state) => {
            state.state = SliceState.LOADING;
        });
        builder.addCase(getCoins.rejected, (state, action) => {
            state.state = SliceState.ERROR;
            state.error = action.payload as string;
        });
    },
});

export { actions, name, reducer };
