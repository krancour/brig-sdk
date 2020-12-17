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
exports.Project = void 0;
const uuid = __importStar(require("uuid"));
class Project extends Object {
    constructor(workerTemplate) {
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
exports.Project = Project;
//# sourceMappingURL=project.js.map