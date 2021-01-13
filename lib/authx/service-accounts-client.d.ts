export declare class SessionsClient {
    private baseUrl;
    private loggedIn;
    private rms;
    private authToken;
    constructor(baseUrl: string, authToken?: string);
    createSA: (callback?: (status: Number, response: Object) => any) => void;
    getSA: (id: String, callback?: (status: Number, response: Object) => any) => void;
    lockSA: (id: String, callback?: (status: Number, response: Object) => any) => void;
    unlockSA: (id: String, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=service-accounts-client.d.ts.map