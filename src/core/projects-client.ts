import { time } from "console";
import { RestMachineryService } from "../rest-machinery/rest-machinery-service";

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
        this.rms.sendRequest('GET', 'v2/projects', (xhrStatus: any, xhrResponse: string) => {
            console.log(new Date(), 'RESPONSE:', xhrStatus);
            console.log(xhrResponse);
            this.projects = JSON.parse(xhrResponse);
            if (!this.rms.isNode()) {
                localStorage.projects = xhrResponse;
            }
        });
    }
}