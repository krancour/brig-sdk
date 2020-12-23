export class Worker extends Object {
  private spec: {
    useWorkspace: boolean,
    workspaceSize: string,
    logLevel: string,
    configFilesDirectory: string,
    defaultConfigFiles: Object,
    status: {
      started: string,
      ended: string,
      phase: string
    }
  };

  constructor(
    useWorkspace: boolean,
    workspaceSize: string,
    logLevel: string,
    configFilesDirectory: string,
    defaultConfigFiles: Object,
    status: {
      started: string, ended: string, phase: string
    }
  ) {
    super();
    this.spec = {
      useWorkspace: useWorkspace,
      workspaceSize: workspaceSize,
      logLevel: logLevel,
      configFilesDirectory: configFilesDirectory,
      defaultConfigFiles: defaultConfigFiles,
      status: status
    }
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

  setSpec(spec: {
    useWorkspace: boolean,
    workspaceSize: string,
    logLevel: string,
    configFilesDirectory: string,
    defaultConfigFiles: Object,
    status: {
      started: string,
      ended: string,
      phase: string
    }
  }) {
    this.spec = spec;
  }

  setUseWorkspace(useWorkspace: boolean) {
    this.spec.useWorkspace = useWorkspace;
  }

  setWorkspaceSize(workspaceSize: string) {
    this.spec.workspaceSize = workspaceSize;
  }

  setLogLevel(logLevel: string) {
    this.spec.logLevel = logLevel;
  }

  setConfigFilesDirectory(configFilesDirectory: string) {
    this.spec.configFilesDirectory = configFilesDirectory;
  }

  setDefaultConfigFiles(defaultConfigFiles: Object) {
    this.spec.defaultConfigFiles = defaultConfigFiles;
  }

  setStatus(status: { started: string, ended: string, phase: string }) {
    this.spec.status = status;
  }

  setStarted(started: string) {
    this.spec.status.started = started;
  }

  setEnded(ended: string) {
    this.spec.status.ended = ended;
  }

  setPhase(phase: string) {
    this.spec.status.phase = phase;
  }
}