"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsClient = void 0;
const rest_machinery_service_1 = require("../rest-machinery/rest-machinery-service");
class ProjectsClient {
    constructor(baseUrl, authToken) {
        this.setAuthToken = (newAuthToken) => {
            this.rms.setAuthToken(newAuthToken);
        };
        this.getProjects = () => {
            this.rms.sendRequest('GET', '/v2/projects', (xhrStatus, xhrResponse) => {
                console.log(new Date(), 'RESPONSE:', xhrStatus);
                console.log(xhrResponse);
                this.projects = xhrResponse;
            });
        };
        this.createProject = () => {
            this.rms.sendRequest('POST', '/v2/projects', (xhrStatus, xhrResponse) => {
                console.log(new Date(), 'RESPONSE:', xhrStatus);
                console.log(xhrResponse);
            });
        };
        this.rms = new rest_machinery_service_1.RestMachineryService(baseUrl, authToken);
    }
}
exports.ProjectsClient = ProjectsClient;
//# sourceMappingURL=projects-client.js.map