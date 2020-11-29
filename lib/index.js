"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("./api-client");
const authx_api_client_1 = require("./authx/authx-api-client");
const sessions_client_1 = require("./authx/sessions-client");
const core_api_client_1 = require("./core/core-api-client");
const events_client_1 = require("./core/events-client");
const jobs_client_1 = require("./core/jobs-client");
const logs_client_1 = require("./core/logs-client");
const projects_client_1 = require("./core/projects-client");
const secrets_client_1 = require("./core/secrets-client");
const workers_client_1 = require("./core/workers-client");
// Allow all the clients to be imported individually
// This allows the package users to optimize their code based on use within a file
// Export the ApiClient
module.exports = {
    // Export the ApiClient
    ApiClient: api_client_1.ApiClient,
    // Export the Authentication-related Clients
    AuthxApiClient: authx_api_client_1.AuthxApiClient,
    SessionsClient: sessions_client_1.SessionsClient,
    // Export the Core-functionality Clients
    CoreApiClient: core_api_client_1.CoreApiClient,
    EventsClient: events_client_1.EventsClient,
    JobsClient: jobs_client_1.JobsClient,
    LogsClient: logs_client_1.LogsClient,
    ProjectsClient: projects_client_1.ProjectsClient,
    SecretsClient: secrets_client_1.SecretsClient,
    WorkersClient: workers_client_1.WorkersClient
};
//# sourceMappingURL=index.js.map