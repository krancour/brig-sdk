export declare class ApiClient {
    private baseUrl;
    private coreApiClient;
    private authxApiClient;
    constructor(baseUrl: string);
    getAuthToken: () => string;
    setAuthToken: (newAuthToken: string) => void;
    login: () => void;
    logout: () => void;
    getProjects: (callback?: (status: Number, response: Object) => any) => void;
    getProject: (projectId: string, callback?: (status: Number, response: Object) => any) => void;
    createProject: (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => void;
    deleteProject: (id: string, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=api-client.d.ts.map