import { RestMachineryService } from "../rest-machinery/rest-machinery-service";
import { Event } from "./models/event";
import { Worker } from "./models/worker";
const apiVersion = require('../../package.json').apiVersion;
// this is a test

export class EventsClient {
  private rms: RestMachineryService;

  constructor(baseUrl: string, authToken: string) {
    this.rms = new RestMachineryService(baseUrl, authToken);
  }

  setAuthToken = (newAuthToken: string) => {
    this.rms.setAuthToken(newAuthToken);
  }

  getEvents = (callback?: (status: Number, response: Object) => any) => {
    this.rms.sendRequest('GET', '/v2/events', callback);
  }

  getEvent = (eventId: string, callback?: (status: Number, response: Object) => any) => {
    this.rms.sendRequest('GET', `/v2/events/${eventId}`, callback);
  }

  createEvent = (projectId: string, source: string, type: string, worker: Worker, eventId?: string, callback?: (status: Number, response: Object) => any) => {
    this.rms.sendRequest('POST', '/v2/events', callback, undefined, {
      projectID: projectId,
      apiVersion: apiVersion,
      kind: 'Event',
      metadata: {},
      source: source,
      type: type
    });
  }
}