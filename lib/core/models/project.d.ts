export declare class Project extends Object {
    private apiVersion;
    private kind;
    private metadata;
    private spec;
    constructor(workerTemplate?: Object);
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
}
//# sourceMappingURL=project.d.ts.map