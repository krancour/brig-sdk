import * as uuid from 'uuid';
import { Worker } from './worker';

export class Event extends Object {
  private apiVersion: string;
  private kind: string;
  private metadata: {
    id: string,
    created: string
  };
  private projectId: string;
  private source: string;
  private type: string;
  private worker: Worker;

  constructor(projectId: string, source: string, type: string, worker: Worker, eventId?: string) {
    super();
    this.apiVersion = require('../../../package.json').apiVersion;
    this.kind = 'Event';
    eventId ?
      this.metadata = {
        id: eventId,
        created: new Date().toString()
      } :
      this.metadata = {
        id: 'a' + uuid.v4(),
        created: new Date().toString()
      };
    this.projectId = projectId;
    this.source = source;
    this.type = type;
    this.worker = worker;
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

  getEventId() {
    return this.metadata.id;
  }

  getCreated() {
    return this.metadata.created;
  }

  getProjectId() {
    return this.projectId;
  }

  getSource() {
    return this.source;
  }

  getType() {
    return this.type;
  }

  getWorker() {
    return this.worker
  }

  setApiVersion(apiVersion: string) {
    this.apiVersion = apiVersion;
  }

  setKind(kind: string) {
    this.kind = kind;
  }
  
  setMetadata(metadata: {id: string, created: string}) {
    this.metadata = metadata;
  }

  setEventId(eventId: string) {
    this.metadata.id = eventId;
  }

  setCreated(created: string) {
    this.metadata.created = created;
  }

  setProjectId(projectId: string) {
    this.projectId = projectId;
  }

  setSource(source: string) {
    this.source = source;
  }

  setType(type: string) {
    this.type = type;
  }

  setWorker(worker: Worker) {
    this.worker = worker;
  }
}