export declare class Project extends Object {
    private apiVersion;
    private kind;
    private metadata;
    private spec;
    constructor(id?: string, workerTemplate?: Object);
    getApiVersion(): string;
    getKind(): string;
    getMetadata(): {
        id: string;
    };
    getId(): string;
    getSpec(): {
        workerTemplate: Object;
    };
    getWorkerTemplate(): Object;
    setApiVersion(apiVersion: string): void;
    setKind(kind: string): void;
    setMetadata(metadata: {
        id: string;
    }): void;
    setId(id: string): void;
    setSpec(spec: {
        workerTemplate: Object;
    }): void;
    setWorkerTemplate(workerTemplate: Object): void;
}
//# sourceMappingURL=project.d.ts.map