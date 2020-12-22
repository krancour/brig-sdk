import { Project } from "./models/project";
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
    getProjects: (callback?: (status: Number, response: Object) => any) => void;
    getProject: (projectId: string, callback?: (status: Number, response: Object) => any) => void;
    createProject: (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => void;
    updateProject: (id: string, project: Project, callback?: (status: Number, response: Object) => any) => void;
    deleteProject: (id: string, callback?: (status: Number, response: Object) => any) => void;
    getEvents: (callback?: (status: Number, response: Object) => any) => void;
    getEvent: (eventId: string, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=core-api-client.d.ts.map