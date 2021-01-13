"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsClient = void 0;
const rest_machinery_service_1 = require("../rest-machinery/rest-machinery-service");
class SessionsClient {
    constructor(baseUrl, authToken) {
        this.login = () => {
            // TODO: implement login functionality here via network call
            // Until login functionality is accomplished, define this string here to simulate a network request and response
            const fakeToken = '';
            if (!this.rms.isNode()) {
                localStorage.jwt = fakeToken;
            }
            return fakeToken;
        };
        this.logout = () => {
            // TODO: implement logout functionality here via network call
            if (!this.rms.isNode()) {
                localStorage.removeItem('jwt');
            }
            this.authToken = undefined;
            this.rms.setAuthToken(this.authToken);
        };
        this.getAuthToken = () => {
            if (!this.rms.isNode() && localStorage.jwt) {
                this.authToken = localStorage.jwt;
            }
            return this.authToken ? this.authToken : this.login();
        };
        this.setAuthToken = (newAuthToken) => {
            this.rms.setAuthToken(newAuthToken);
            this.authToken = newAuthToken;
            if (!this.rms.isNode()) {
                localStorage.jwt = newAuthToken;
            }
        };
        // Sessions requests - these are the MOST IMPORTANT to get working for this project
        this.createRootSession = (password, callback) => {
            // A few questions:
            // 1. How will we construct the auth headers for this and related functions?
            // 2. Do we need context like the Go SDK passes into the request?
            // 3. Will we handle the response data differently for different types of requests? (e.g., authentication)
            this.rms.sendRequest('POST', 'v2/sessions', callback, new Map().set('root', 'true'), undefined, new Map().set('root', password));
        };
        this.createUserSession = (callback) => {
            this.rms.sendRequest('POST', 'v2/sessions', callback);
        };
        this.deleteSession = (callback) => {
            this.rms.sendRequest('DELETE', 'v2/sessions', callback);
        };
        this.baseUrl = baseUrl;
        this.loggedIn = false;
        this.rms = new rest_machinery_service_1.RestMachineryService(baseUrl, authToken);
        authToken ? this.authToken = authToken : this.authToken = this.login();
    }
}
exports.SessionsClient = SessionsClient;
//# sourceMappingURL=sessions-client.js.map