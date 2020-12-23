export declare class Worker extends Object {
    private spec;
    constructor(useWorkspace: boolean, workspaceSize: string, logLevel: string, configFilesDirectory: string, defaultConfigFiles: Object, status: {
        started: string;
        ended: string;
        phase: string;
    });
    getSpec(): {
        useWorkspace: boolean;
        workspaceSize: string;
        logLevel: string;
        configFilesDirectory: string;
        defaultConfigFiles: Object;
        status: {
            started: string;
            ended: string;
            phase: string;
        };
    };
    getUseWorkspace(): boolean;
    getWorkspaceSize(): string;
    getLogLevel(): string;
    getConfigFilesDirectory(): string;
    getStatus(): {
        started: string;
        ended: string;
        phase: string;
    };
    getStarted(): string;
    getEnded(): string;
    getPhase(): string;
    setSpec(spec: {
        useWorkspace: boolean;
        workspaceSize: string;
        logLevel: string;
        configFilesDirectory: string;
        defaultConfigFiles: Object;
        status: {
            started: string;
            ended: string;
            phase: string;
        };
    }): void;
    setUseWorkspace(useWorkspace: boolean): void;
    setWorkspaceSize(workspaceSize: string): void;
    setLogLevel(logLevel: string): void;
    setConfigFilesDirectory(configFilesDirectory: string): void;
    setDefaultConfigFiles(defaultConfigFiles: Object): void;
    setStatus(status: {
        started: string;
        ended: string;
        phase: string;
    }): void;
    setStarted(started: string): void;
    setEnded(ended: string): void;
    setPhase(phase: string): void;
}
//# sourceMappingURL=worker.d.ts.map