import { EventsClient } from "./events-client";
import { JobsClient } from "./jobs-client";
import { LogsClient } from "./logs-client";
import { ProjectsClient } from "./projects-client";
import { SecretsClient } from "./secrets-client";
import { WorkersClient } from "./workers-client";

export class CoreApiClient {
    private projectsClient: ProjectsClient;
    private eventsClient: EventsClient;
    private jobsClient: JobsClient;
    private logsClient: LogsClient;
    private secretsClient: SecretsClient;
    private workersClient: WorkersClient;
    
    constructor(private baseUrl: string, private authToken: string) {
        this.projectsClient = new ProjectsClient(baseUrl, authToken);
        this.eventsClient = new EventsClient();
        this.jobsClient = new JobsClient();
        this.logsClient = new LogsClient();
        this.secretsClient = new SecretsClient();
        this.workersClient = new WorkersClient();
    }

    setAuthToken = (newAuthToken: string) => {
        this.projectsClient.setAuthToken(newAuthToken);
    }

    getProjects = () => {
        this.projectsClient.getProjects();
    }
}