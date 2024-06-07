import {
    ApiEndpoints,
    ContentType,
    GetCoinsApiResponseDto,
    HTTP,
    HttpApi,
    Storage,
} from '../../../shared';

type Constructor = {
    baseUrl: string;
    http: HTTP;
    storage: Storage;
};

export class CoinsApi extends HttpApi {
    constructor({ baseUrl, http, storage }: Constructor) {
        super({ baseUrl, http, storage });
    }

    public async getCoins() {
        const response = await this.load(
            this.getFullEndpoint(ApiEndpoints.COINS),
            {
                method: 'GET',
                contentType: ContentType.JSON,
                hasAuth: false,
            },
        );

        return await response.json<GetCoinsApiResponseDto>();
    }
}
