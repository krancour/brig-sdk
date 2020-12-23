import { Project } from "./core/models/project";
import { Event } from "./core/models/event";
import { Worker } from "./core/models/worker";
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
    updateProject: (id: string, project: Project, callback?: (status: Number, response: Object) => any) => void;
    deleteProject: (id: string, callback?: (status: Number, response: Object) => any) => void;
    getEvents: (callback?: (status: Number, response: Object) => any) => void;
    getEvent: (eventId: string, callback?: (status: Number, response: Object) => any) => void;
    createEvent: (projectId: string, source: string, type: string, worker: Worker, eventId?: string, callback?: (status: Number, response: Object) => any) => void;
    updateEvent: (id: string, event: Event, callback?: (status: Number, response: Object) => any) => void;
    deleteEvent: (id: string, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=api-client.d.ts.map