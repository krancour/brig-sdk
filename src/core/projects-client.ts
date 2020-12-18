import { RestMachineryService } from "../rest-machinery/rest-machinery-service";
import { Project } from "./models/project";

export class ProjectsClient {
    private rms: RestMachineryService;

    constructor(baseUrl: string, authToken: string) {
        this.rms = new RestMachineryService(baseUrl, authToken);
    }

    setAuthToken = (newAuthToken: string) => {
        this.rms.setAuthToken(newAuthToken);
    }

    getProjects = (callback?: (status: Number, response: Object) => any ) => {
        this.rms.sendRequest('GET', '/v2/projects', callback);
    }

    getProject = (projectId: string, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('GET', `/v2/projects/${projectId}`, callback);
    }

    createProject = (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('POST', '/v2/projects', callback, undefined, new Project(id, workerTemplate));
    }

    deleteProject = (id: string, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('DELETE', `/v2/projects/${id}`, callback);
    }
}