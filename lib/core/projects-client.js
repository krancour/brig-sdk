"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsClient = void 0;
const rest_machinery_service_1 = require("../rest-machinery/rest-machinery-service");
const project_1 = require("./models/project");
class ProjectsClient {
    constructor(baseUrl, authToken) {
        this.setAuthToken = (newAuthToken) => {
            this.rms.setAuthToken(newAuthToken);
        };
        this.getProjects = (callback) => {
            this.rms.sendRequest('GET', '/v2/projects', callback);
        };
        this.getProject = (projectId, callback) => {
            this.rms.sendRequest('GET', `/v2/projects/${projectId}`, callback);
        };
        this.createProject = (id, workerTemplate, callback) => {
            this.rms.sendRequest('POST', '/v2/projects', callback, undefined, new project_1.Project(id, workerTemplate));
        };
        this.updateProject = (id, project, callback) => {
            this.rms.sendRequest('PUT', `/v2/projects/${id}`, callback, undefined, project);
        };
        this.deleteProject = (id, callback) => {
            this.rms.sendRequest('DELETE', `/v2/projects/${id}`, callback);
        };
        this.rms = new rest_machinery_service_1.RestMachineryService(baseUrl, authToken);
    }
}
exports.ProjectsClient = ProjectsClient;
//# sourceMappingURL=projects-client.js.map