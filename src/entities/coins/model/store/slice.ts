import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    localStorageToggler,
    SliceState,
    StorageKey,
} from '../../../../shared';

import { getCoins } from './actions';

type State = {
    state: SliceState;
    error: string | null;
    coins: string[];
    selectedCoins: string[];
};

const initialState: State = {
    state: SliceState.IDLE,
    error: null,
    coins: [],
    selectedCoins: (localStorage.getItem(StorageKey.SELECTED_COINS)
        ? JSON.parse(localStorage.getItem(StorageKey.SELECTED_COINS) || '')
        : []) as string[],
};

const { reducer, actions, name } = createSlice({
    initialState,
    name: 'coins',
    reducers: {
        toggleCoinInActive: (state, action: PayloadAction<string>) => {
            if (state.selectedCoins.includes(action.payload)) {
                state.selectedCoins = state.selectedCoins.filter(
                    (coin) => coin !== action.payload,
                );
            } else {
                state.selectedCoins.push(action.payload);
            }
            localStorageToggler(action.payload, StorageKey.SELECTED_COINS);
        },
    },
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
