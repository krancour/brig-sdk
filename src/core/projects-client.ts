import { time } from "console";
import { RestMachineryService } from "../rest-machinery/rest-machinery-service";
import { Project } from "./models/project";

export class ProjectsClient {
    private baseUrl: string;
    private authToken: string;
    private rms: RestMachineryService;
    private projects: Object;
    private currentProject: Object;

    constructor(baseUrl: string, authToken: string) {
        this.rms = new RestMachineryService(baseUrl, authToken);
    }

    setAuthToken = (newAuthToken: string) => {
        this.rms.setAuthToken(newAuthToken);
    }

    getProjects = () => {
        this.rms.sendRequest('GET', '/v2/projects', (xhrStatus: any, xhrResponse: Object) => {
            console.log(new Date(), 'RESPONSE:', xhrStatus);
            console.log(xhrResponse);
            this.projects = xhrResponse;
        });
    }

    createProject = (id?: string, workerTemplate?: Object) => {
        this.rms.sendRequest('POST', '/v2/projects', (xhrStatus: any, xhrResponse: Object) => {
            console.log(new Date(), 'RESPONSE:', xhrStatus);
            console.log(xhrResponse);
        }, undefined, new Project(id, workerTemplate));
    }

    deleteProject = (id: string) => {
        this.rms.sendRequest('DELETE', `/v2/projects/${id}`, (xhrStatus: any, xhrResponse: Object) => {
            console.log(new Date(), 'RESPONSE:', xhrStatus);
            console.log(xhrResponse);
        });
    }
}