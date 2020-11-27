import { AuthxApiClient } from "./authx/authx-api-client";
import { CoreApiClient } from "./core/core-api-client";

export class ApiClient {
    private coreApiClient: CoreApiClient;
    private authxApiClient: AuthxApiClient;

    constructor(baseUrl: string) {
        this.coreApiClient = new CoreApiClient(baseUrl);
        this.authxApiClient = new AuthxApiClient(baseUrl);
    }
}