import { Worker } from "./models/worker";
export declare class EventsClient {
    private rms;
    constructor(baseUrl: string, authToken: string);
    setAuthToken: (newAuthToken: string) => void;
    getEvents: (callback?: (status: Number, response: Object) => any) => void;
    getEvent: (eventId: string, callback?: (status: Number, response: Object) => any) => void;
    createEvent: (projectId: string, source: string, type: string, worker: Worker, eventId?: string, callback?: (status: Number, response: Object) => any) => void;
}
//# sourceMappingURL=events-client.d.ts.map