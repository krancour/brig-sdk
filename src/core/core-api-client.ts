import { EventsClient } from "./events-client";
import { JobsClient } from "./jobs-client";
import { LogsClient } from "./logs-client";
import { Project } from "./models/project";
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
        this.eventsClient = new EventsClient(baseUrl, authToken);
        this.jobsClient = new JobsClient();
        this.logsClient = new LogsClient();
        this.secretsClient = new SecretsClient();
        this.workersClient = new WorkersClient();
    }

    setAuthToken = (newAuthToken: string) => {
        this.projectsClient.setAuthToken(newAuthToken);
    }

    getProjects = (callback?: (status: Number, response: Object) => any) => {
        this.projectsClient.getProjects(callback);
    }

    getProject = (projectId: string, callback?: (status: Number, response: Object) => any) => {
        this.projectsClient.getProject(projectId, callback);
    }

    createProject = (id?: string, workerTemplate?: Object, callback?: (status: Number, response: Object) => any) => {
        this.projectsClient.createProject(id, workerTemplate, callback);
    }

    updateProject = (id: string, project: Project, callback?: (status: Number, response: Object) => any) => {
        this.projectsClient.updateProject(id, project, callback);
    }

    deleteProject = (id: string, callback?: (status: Number, response: Object) => any) => {
        this.projectsClient.deleteProject(id, callback);
    }

    getEvents = (callback?: (status: Number, response: Object) => any) => {
        this.eventsClient.getEvents(callback);
    }
}