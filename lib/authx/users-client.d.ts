export declare class SessionsClient {
    private baseUrl;
    private loggedIn;
    private rms;
    private authToken;
    constructor(baseUrl: string, authToken?: string);
    getUser: (id: String, callback?: (status: Number, response: Object) => any) => void;
    lockUser: (id: String, callback?: (status: Number, response: Object) => any) => void;
    unlockUser: (id: String, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=users-client.d.ts.map