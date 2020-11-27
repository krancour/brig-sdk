import { RestMachineryService } from "../rest-machinery/rest-machinery-service";

export class ProjectsClient {
    private rms: RestMachineryService;

    constructor(private authToken: string) {
        this.rms = new RestMachineryService(authToken);
    }

    getProjects = () {
        this.rms.sendRequest('GET', 'v2/projects', function(xhrStatus, xhrResponse) {
            console.log('RESPONSE:', xhrStatus);
            console.log(xhrResponse);
        });
    }
}