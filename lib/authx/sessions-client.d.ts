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
    createRootSession: (password: string, callback?: (status: Number, response: Object) => any) => void;
    createUserSession: (callback?: (status: Number, response: Object) => any) => void;
    deleteSession: (callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=sessions-client.d.ts.map