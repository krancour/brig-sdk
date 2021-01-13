"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsClient = void 0;
class SessionsClient {
    constructor(baseUrl, authToken) {
        // Users requests
        /*listUsers = (opts: JSON, callback?: (status: Number, response: Object) => any) => {
            // In addition to the above questions, how will we handle query parameters like the ones this request requires?
            this.rms.sendRequest('GET', 'v2/users', callback, queryParams(undefined, opts));
        }*/
        this.getUser = (id, callback) => {
            // Using template strings from Javascript to add the provided id to the path
            this.rms.sendRequest('GET', `v2/users/${id}`, callback);
        };
        this.lockUser = (id, callback) => {
            this.rms.sendRequest('PUT', `v2/users/${id}/lock`, callback);
        };
        this.unlockUser = (id, callback) => {
            this.rms.sendRequest('DELETE', `v2/users/${id}/lock`, callback);
        };
    }
}
exports.SessionsClient = SessionsClient;
//# sourceMappingURL=users-client.js.map