export declare class ApiClient {
    private baseUrl;
    private coreApiClient;
    private authxApiClient;
    constructor(baseUrl: string);
    getAuthToken: () => string;
    setAuthToken: (newAuthToken: string) => void;
    login: () => void;
    logout: () => void;
    getProjects: () => void;
    getProject: (projectId: string) => void;
    createProject: () => void;
}
//# sourceMappingURL=api-client.d.ts.map