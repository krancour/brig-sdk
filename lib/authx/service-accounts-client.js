"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsClient = void 0;
class SessionsClient {
    constructor(baseUrl, authToken) {
        // Service Accounts requests
        this.createSA = (callback) => {
            this.rms.sendRequest('POST', 'v2/service-accounts', callback);
        };
        /*listSAs = (opts: JSON, callback?: (status: Number, response: Object) => any) => {
            this.rms.sendRequest('GET', 'v2/service-accounts', callback, queryParams(undefined, opts));
        }*/
        this.getSA = (id, callback) => {
            this.rms.sendRequest('GET', `v2/service-accounts/${id}`, callback);
        };
        this.lockSA = (id, callback) => {
            this.rms.sendRequest('PUT', `v2/service-accounts/${id}/lock`, callback);
        };
        this.unlockSA = (id, callback) => {
            this.rms.sendRequest('DELETE', `v2/service-accounts/${id}/lock`, callback);
        };
    }
}
exports.SessionsClient = SessionsClient;
//# sourceMappingURL=service-accounts-client.js.map