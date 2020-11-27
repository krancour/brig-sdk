import { SessionsClient } from "./sessions-client";

export class AuthxApiClient {
    constructor(private sessionsClient: SessionsClient) { }
}