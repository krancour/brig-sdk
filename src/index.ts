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
// This allows the package users to optimize their code

// Export the ApiClient
module.exports = ApiClient;

// Export the Authentication-related Clients
module.exports = AuthxApiClient;
module.exports = SessionsClient;

// Export the Core-functionality Clients
module.exports = CoreApiClient;
module.exports = EventsClient;
module.exports = JobsClient;
module.exports = LogsClient;
module.exports = ProjectsClient;
module.exports = SecretsClient;
module.exports = WorkersClient;