import {
    configureStore,
    type ThunkMiddleware,
    type Tuple,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { reducer as coinsReducer } from '../../entities/coins/model/store/slice.ts';
import { coinsApi } from '../../entities/index.ts';
type RootReducer = {
    coins: ReturnType<typeof coinsReducer>;
};

type ExtraArguments = {
    coinsApi: typeof coinsApi;
};

export class Store {
    public instance: ReturnType<
        typeof configureStore<
            RootReducer,
            UnknownAction,
            Tuple<[ThunkMiddleware<RootReducer, UnknownAction, ExtraArguments>]>
        >
    >;

    public constructor() {
        this.instance = configureStore({
            devTools: true,
            reducer: {
                coins: coinsReducer,
            },
            middleware: (getDefaultMiddleware) => {
                return getDefaultMiddleware({
                    thunk: {
                        extraArgument: this.extraArguments,
                    },
                });
            },
        });
    }

    public get extraArguments(): ExtraArguments {
        return {
            coinsApi,
        };
    }
}
