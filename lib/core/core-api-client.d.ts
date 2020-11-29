export declare class CoreApiClient {
    private baseUrl;
    private authToken;
    private projectsClient;
    private eventsClient;
    private jobsClient;
    private logsClient;
    private secretsClient;
    private workersClient;
    constructor(baseUrl: string, authToken: string);
    setAuthToken: (newAuthToken: string) => void;
    getProjects: () => void;
}
//# sourceMappingURL=core-api-client.d.ts.map