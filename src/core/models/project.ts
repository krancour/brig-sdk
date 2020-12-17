import * as uuid from 'uuid';

export class Project extends Object {
  private apiVersion: string;
  private kind: string;
  private metadata: {
    id: string
  };
  private spec: {
    workerTemplate: Object
  };

  constructor(workerTemplate?: Object) {
    super();
    this.apiVersion = require('../../../package.json').apiVersion;
    this.kind = 'Project';
    this.metadata.id = uuid.v4();
    workerTemplate ? this.spec.workerTemplate = workerTemplate : this.spec.workerTemplate = {};
  }

  getApiVersion() {
    return this.apiVersion;
  }

  getKind() {
    return this.kind;
  }

  getMetadata() {
    return this.metadata;
  }

  getId() {
    return this.metadata.id;
  }

  getSpec() {
    return this.spec;
  }

  getWorkerTemplate() {
    return this.spec.workerTemplate;
  }
}