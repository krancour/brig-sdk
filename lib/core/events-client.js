"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsClient = void 0;
const rest_machinery_service_1 = require("../rest-machinery/rest-machinery-service");
const apiVersion = require('../../package.json').apiVersion;
class EventsClient {
    constructor(baseUrl, authToken) {
        this.setAuthToken = (newAuthToken) => {
            this.rms.setAuthToken(newAuthToken);
        };
        this.getEvents = (callback) => {
            this.rms.sendRequest('GET', '/v2/events', callback);
        };
        this.getEvent = (eventId, callback) => {
            this.rms.sendRequest('GET', `/v2/events/${eventId}`, callback);
        };
        this.createEvent = (projectId, source, type, worker, eventId, callback) => {
            this.rms.sendRequest('POST', '/v2/events', callback, undefined, {
                apiVersion: apiVersion,
                kind: 'Event',
                metadata: {},
                source: source,
                type: type
            });
        };
        this.rms = new rest_machinery_service_1.RestMachineryService(baseUrl, authToken);
    }
}
exports.EventsClient = EventsClient;
//# sourceMappingURL=events-client.js.map