"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const authx_api_client_1 = require("./authx/authx-api-client");
const core_api_client_1 = require("./core/core-api-client");
class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.getAuthToken = () => {
            return this.authxApiClient.getAuthToken();
        };
        this.setAuthToken = (newAuthToken) => {
            this.authxApiClient.setAuthToken(newAuthToken);
            this.coreApiClient.setAuthToken(newAuthToken);
        };
        this.login = () => {
        };
        this.logout = () => {
        };
        this.getProjects = (callback) => {
            this.coreApiClient.getProjects(callback);
        };
        this.getProject = (projectId, callback) => {
            this.coreApiClient.getProject(projectId, callback);
        };
        this.createProject = (id, workerTemplate, callback) => {
            this.coreApiClient.createProject(id, workerTemplate, callback);
        };
        this.updateProject = (id, project, callback) => {
            this.coreApiClient.updateProject(id, project, callback);
        };
        this.deleteProject = (id, callback) => {
            this.coreApiClient.deleteProject(id, callback);
        };
        this.getEvents = (callback) => {
            this.coreApiClient.getEvents(callback);
        };
        this.getEvent = (eventId, callback) => {
            this.coreApiClient.getEvent(eventId, callback);
        };
        this.createEvent = (projectId, source, type, worker, eventId, callback) => {
            this.coreApiClient.createEvent(projectId, source, type, worker, eventId, callback);
        };
        this.updateEvent = (id, event, callback) => {
        };
        this.deleteEvent = (id, callback) => {
        };
        this.authxApiClient = new authx_api_client_1.AuthxApiClient(baseUrl);
        const authToken = this.authxApiClient.getAuthToken();
        this.coreApiClient = new core_api_client_1.CoreApiClient(baseUrl, authToken);
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=api-client.js.map