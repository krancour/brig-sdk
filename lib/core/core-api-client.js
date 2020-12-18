"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreApiClient = void 0;
const events_client_1 = require("./events-client");
const jobs_client_1 = require("./jobs-client");
const logs_client_1 = require("./logs-client");
const projects_client_1 = require("./projects-client");
const secrets_client_1 = require("./secrets-client");
const workers_client_1 = require("./workers-client");
class CoreApiClient {
    constructor(baseUrl, authToken) {
        this.baseUrl = baseUrl;
        this.authToken = authToken;
        this.setAuthToken = (newAuthToken) => {
            this.projectsClient.setAuthToken(newAuthToken);
        };
        this.getProjects = (callback) => {
            this.projectsClient.getProjects(callback);
        };
        this.getProject = (projectId, callback) => {
            this.projectsClient.getProject(projectId, callback);
        };
        this.createProject = (id, workerTemplate, callback) => {
            this.projectsClient.createProject(id, workerTemplate, callback);
        };
        this.deleteProject = (id, callback) => {
            this.projectsClient.deleteProject(id, callback);
        };
        this.projectsClient = new projects_client_1.ProjectsClient(baseUrl, authToken);
        this.eventsClient = new events_client_1.EventsClient();
        this.jobsClient = new jobs_client_1.JobsClient();
        this.logsClient = new logs_client_1.LogsClient();
        this.secretsClient = new secrets_client_1.SecretsClient();
        this.workersClient = new workers_client_1.WorkersClient();
    }
}
exports.CoreApiClient = CoreApiClient;
//# sourceMappingURL=core-api-client.js.map