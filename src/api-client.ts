import { AuthxApiClient } from "./authx/authx-api-client";
import { CoreApiClient } from "./core/core-api-client";

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

    getProjects = () => {
        this.coreApiClient.getProjects();
    }

    getProject = (projectId: string) => {

    }

    createProject = (id?: string, workerTemplate?: Object) => {
        this.coreApiClient.createProject();
    }


}