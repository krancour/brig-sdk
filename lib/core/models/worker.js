"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
class Worker extends Object {
    constructor(useWorkspace, workspaceSize, logLevel, configFilesDirectory, defaultConfigFiles, status) {
        super();
        this.spec = {
            useWorkspace: useWorkspace,
            workspaceSize: workspaceSize,
            logLevel: logLevel,
            configFilesDirectory: configFilesDirectory,
            defaultConfigFiles: defaultConfigFiles,
            status: status
        };
    }
    getSpec() {
        return this.spec;
    }
    getUseWorkspace() {
        return this.spec.useWorkspace;
    }
    getWorkspaceSize() {
        return this.spec.workspaceSize;
    }
    getLogLevel() {
        return this.spec.logLevel;
    }
    getConfigFilesDirectory() {
        return this.spec.configFilesDirectory;
    }
    getStatus() {
        return this.spec.status;
    }
    getStarted() {
        return this.spec.status.started;
    }
    getEnded() {
        return this.spec.status.ended;
    }
    getPhase() {
        return this.spec.status.phase;
    }
    setSpec(spec) {
        this.spec = spec;
    }
    setUseWorkspace(useWorkspace) {
        this.spec.useWorkspace = useWorkspace;
    }
    setWorkspaceSize(workspaceSize) {
        this.spec.workspaceSize = workspaceSize;
    }
    setLogLevel(logLevel) {
        this.spec.logLevel = logLevel;
    }
    setConfigFilesDirectory(configFilesDirectory) {
        this.spec.configFilesDirectory = configFilesDirectory;
    }
    setDefaultConfigFiles(defaultConfigFiles) {
        this.spec.defaultConfigFiles = defaultConfigFiles;
    }
    setStatus(status) {
        this.spec.status = status;
    }
    setStarted(started) {
        this.spec.status.started = started;
    }
    setEnded(ended) {
        this.spec.status.ended = ended;
    }
    setPhase(phase) {
        this.spec.status.phase = phase;
    }
}
exports.Worker = Worker;
//# sourceMappingURL=worker.js.map