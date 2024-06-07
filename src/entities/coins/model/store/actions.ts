import { createAsyncThunk } from '@reduxjs/toolkit';

import { AsyncThunkConfig, GetCoinsApiResponseDto } from '../../../../shared';

import { name } from './slice';

const getCoins = createAsyncThunk<
    GetCoinsApiResponseDto,
    void,
    AsyncThunkConfig
>(`${name}/get-coins`, async (_, { extra, rejectWithValue }) => {
    try {
        const { coinsApi } = extra;
        const coins = await coinsApi.getCoins();

        return coins;
    } catch (error) {
        return rejectWithValue('Error while fetching data');
    }
});

export { getCoins };
