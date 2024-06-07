import {
    configureStore,
    type ThunkMiddleware,
    type Tuple,
    type UnknownAction,
} from '@reduxjs/toolkit';

import { reducer as coinsReducer } from '../../entities/coins/model/store/slice.ts';
import { coinsApi } from '../../entities/index.ts';
import { exampleApi } from '../../feature/example/api/example-api/example-api.ts';
import { reducer as exampleReducer } from '../../feature/example/model/store/example.store.ts';
type RootReducer = {
    example: ReturnType<typeof exampleReducer>;
    coins: ReturnType<typeof coinsReducer>;
};

type ExtraArguments = {
    exampleApi: typeof exampleApi;
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
                example: exampleReducer,
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
            exampleApi,
            coinsApi,
        };
    }
}
