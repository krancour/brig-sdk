import { Worker } from './worker';
export declare class Event extends Object {
    private apiVersion;
    private kind;
    private metadata;
    private projectId;
    private source;
    private type;
    private worker;
    constructor(projectId: string, source: string, type: string, worker: Worker, eventId?: string);
    getApiVersion(): string;
    getKind(): string;
    getMetadata(): {
        id: string;
        created: string;
    };
    getEventId(): string;
    getCreated(): string;
    getProjectId(): string;
    getSource(): string;
    getType(): string;
    getWorker(): Worker;
    setApiVersion(apiVersion: string): void;
    setKind(kind: string): void;
    setMetadata(metadata: {
        id: string;
        created: string;
    }): void;
    setEventId(eventId: string): void;
    setCreated(created: string): void;
    setProjectId(projectId: string): void;
    setSource(source: string): void;
    setType(type: string): void;
    setWorker(worker: Worker): void;
}
//# sourceMappingURL=event.d.ts.map