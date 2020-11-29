export declare class SessionsClient {
    private baseUrl;
    private loggedIn;
    private rms;
    private authToken;
    constructor(baseUrl: string, authToken?: string);
    login: () => string;
    logout: () => void;
    getAuthToken: () => string;
    setAuthToken: (newAuthToken: string) => void;
}
//# sourceMappingURL=sessions-client.d.ts.map