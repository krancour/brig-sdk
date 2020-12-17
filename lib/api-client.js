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
        this.getProjects = () => {
            this.coreApiClient.getProjects();
        };
        this.getProject = (projectId) => {
        };
        this.createProject = () => {
            this.coreApiClient.createProject();
        };
        this.authxApiClient = new authx_api_client_1.AuthxApiClient(baseUrl);
        const authToken = this.authxApiClient.getAuthToken();
        this.coreApiClient = new core_api_client_1.CoreApiClient(baseUrl, authToken);
    }
}
exports.ApiClient = ApiClient;
//# sourceMappingURL=api-client.js.map