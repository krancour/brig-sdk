export declare class ProjectsClient {
    private baseUrl;
    private authToken;
    private rms;
    private projects;
    private currentProject;
    constructor(baseUrl: string, authToken: string);
    setAuthToken: (newAuthToken: string) => void;
    getProjects: () => void;
    createProject: (id?: string, workerTemplate?: Object) => void;
    deleteProject: (id: string) => void;
}
//# sourceMappingURL=projects-client.d.ts.map