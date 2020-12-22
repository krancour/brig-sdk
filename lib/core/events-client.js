"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsClient = void 0;
const rest_machinery_service_1 = require("../rest-machinery/rest-machinery-service");
class EventsClient {
    constructor(baseUrl, authToken) {
        this.setAuthToken = (newAuthToken) => {
            this.rms.setAuthToken(newAuthToken);
        };
        this.getEvents = (callback) => {
            this.rms.sendRequest('GET', '/v2/events', callback);
        };
        this.rms = new rest_machinery_service_1.RestMachineryService(baseUrl, authToken);
    }
}
exports.EventsClient = EventsClient;
//# sourceMappingURL=events-client.js.map