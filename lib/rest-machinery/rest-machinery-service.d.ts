export declare class RestMachineryService {
    private baseUrl;
    private authToken;
    private response;
    constructor(baseUrl: string, authToken?: string);
    sendRequest: (type: string, path: string, callback: Function, queryParams?: Map<string, any>, body?: Object, headers?: Map<string, any>) => void;
    formatParams: (queryParams: Map<string, any>) => string;
    isNode: () => string;
    setAuthToken: (authToken: string) => void;
}
//# sourceMappingURL=rest-machinery-service.d.ts.map