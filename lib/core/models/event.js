"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const uuid = __importStar(require("uuid"));
class Event extends Object {
    constructor(projectId, source, type, worker, eventId) {
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
        return this.worker;
    }
    setApiVersion(apiVersion) {
        this.apiVersion = apiVersion;
    }
    setKind(kind) {
        this.kind = kind;
    }
    setMetadata(metadata) {
        this.metadata = metadata;
    }
    setEventId(eventId) {
        this.metadata.id = eventId;
    }
    setCreated(created) {
        this.metadata.created = created;
    }
    setProjectId(projectId) {
        this.projectId = projectId;
    }
    setSource(source) {
        this.source = source;
    }
    setType(type) {
        this.type = type;
    }
    setWorker(worker) {
        this.worker = worker;
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map