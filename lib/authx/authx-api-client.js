"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthxApiClient = void 0;
const sessions_client_1 = require("./sessions-client");
class AuthxApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.getAuthToken = () => {
            return this.sessionsClient.getAuthToken();
        };
        this.setAuthToken = (newAuthToken) => {
            this.sessionsClient.setAuthToken(newAuthToken);
        };
        this.sessionsClient = new sessions_client_1.SessionsClient(baseUrl);
    }
}
exports.AuthxApiClient = AuthxApiClient;
//# sourceMappingURL=authx-api-client.js.map