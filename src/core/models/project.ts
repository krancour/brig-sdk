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

  constructor(id?: string, workerTemplate?: Object) {
    super();
    this.apiVersion = require('../../../package.json').apiVersion;
    this.kind = 'Project';
    id ?
      this.metadata = {
        id: id
      } :
      this.metadata = {
        id: 'a' + uuid.v4()
      };
    workerTemplate ?
      this.spec = {
        workerTemplate: workerTemplate
      } :
      this.spec = {
        workerTemplate: {}
      };
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

  setApiVersion(apiVersion: string) {
    this.apiVersion = apiVersion;
  }

  setKind(kind: string) {
    this.kind = kind;
  }

  setMetadata(metadata: { id: string }) {
    this.metadata = metadata;
  }

  setId(id: string) {
    this.metadata.id = id;
  }

  setSpec(spec: { workerTemplate: Object }) {
    this.spec = spec;
  }

  setWorkerTemplate(workerTemplate: Object) {
    this.spec.workerTemplate = workerTemplate;
  }
}