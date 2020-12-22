import { AuthxApiClient } from "./authx/authx-api-client";
import { CoreApiClient } from "./core/core-api-client";
import { Project } from "./core/models/project";
import { Event } from "./core/models/event";

export class ApiClient {
    private coreApiClient: CoreApiClient;
    private authxApiClient: AuthxApiClient;

    constructor(private baseUrl: string) {
        this.authxApiClient = new AuthxApiClient(baseUrl);
        const authToken = this.authxApiClient.getAuthToken();
        this.coreApiClient = new CoreApiClient(baseUrl, authToken);
    }

    getAuthToken = () => {
        return this.authxApiClient.getAuthToken();
    }

    setAuthToken = (newAuthToken: string) => {
        this.authxApiClient.setAuthToken(newAuthToken);
        this.coreApiClient.setAuthToken(newAuthToken);
    }

    login = () => {

    }

    logout = () => {

    }

    getProjects = (callback?: (status: Number, response: Object) => any) => {
        this.coreApiClient.getProjects(callback);
    }

    getProject = (projectId: string, callback?: (status: Number, response: Object) => any) => {
        this.coreApiClient.getProject(projectId, callback);
    }

    createProject = (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => {
        this.coreApiClient.createProject(id, workerTemplate, callback);
    }

    updateProject = (id: string, project: Project, callback?: (status: Number, response: Object) => any) => {
        this.coreApiClient.updateProject(id, project, callback);
    }

    deleteProject = (id: string, callback?: (status: Number, response: Object) => any) => {
        this.coreApiClient.deleteProject(id, callback);
    }

    getEvents = (callback?: (status: Number, response: Object) => any) => {
        this.coreApiClient.getEvents(callback);
    }

    getEvent = (eventId: string, callback?: (status: Number, response: Object) => any) => {

    }

    createEvent = (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => {

    }

    updateEvent = (id: string, event: Event, callback?: (status: Number, response: Object) => any) => {

    }

    deleteEvent = (id: string, callback?: (status: Number, response: Object) => any) {

    }
}