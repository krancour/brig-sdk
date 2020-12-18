export declare class ProjectsClient {
    private rms;
    constructor(baseUrl: string, authToken: string);
    setAuthToken: (newAuthToken: string) => void;
    getProjects: (callback?: (status: Number, response: Object) => any) => void;
    getProject: (projectId: string, callback?: (status: Number, response: Object) => any) => void;
    createProject: (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => void;
    deleteProject: (id: string, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=projects-client.d.ts.map