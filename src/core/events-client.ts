import { RestMachineryService } from "../rest-machinery/rest-machinery-service";
import { Event } from "./models/event";

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
}