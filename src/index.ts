import { ApiClient } from "./api-client";
import { AuthxApiClient } from "./authx/authx-api-client";
import { SessionsClient } from "./authx/sessions-client";
import { CoreApiClient } from "./core/core-api-client";
import { EventsClient } from "./core/events-client";
import { JobsClient } from "./core/jobs-client";
import { LogsClient } from "./core/logs-client";
import { ProjectsClient } from "./core/projects-client";
import { SecretsClient } from "./core/secrets-client";
import { WorkersClient } from "./core/workers-client";

// Allow all the clients to be imported individually
// This allows the package users to optimize their code based on use within a file

// Export the ApiClient
module.exports = {
  // Export the ApiClient
  ApiClient: ApiClient,
  // Export the Authentication-related Clients
  AuthxApiClient: AuthxApiClient,
  SessionsClient: SessionsClient,
  // Export the Core-functionality Clients
  CoreApiClient: CoreApiClient,
  EventsClient: EventsClient,
  JobsClient: JobsClient,
  LogsClient: LogsClient,
  ProjectsClient: ProjectsClient,
  SecretsClient: SecretsClient,
  WorkersClient: WorkersClient
};