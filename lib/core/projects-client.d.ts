export declare class ProjectsClient {
    private baseUrl;
    private authToken;
    private rms;
    private projects;
    private currentProject;
    constructor(baseUrl: string, authToken: string);
    setAuthToken: (newAuthToken: string) => void;
    getProjects: () => void;
    createProject: () => void;
}
//# sourceMappingURL=projects-client.d.ts.map