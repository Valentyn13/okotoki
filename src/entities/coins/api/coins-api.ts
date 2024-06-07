import { http, storage } from '../../../shared';

import { CoinsApi } from './coins-api.package';

export const coinsApi = new CoinsApi({
    baseUrl: 'https://api-eu.okotoki.com',
    http,
    storage,
});
