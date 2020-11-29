import { SessionsClient } from "./sessions-client";

export class AuthxApiClient {
    private sessionsClient: SessionsClient;

    constructor(private baseUrl: string) {
        this.sessionsClient = new SessionsClient(baseUrl);
    }

    getAuthToken = () => {
        return this.sessionsClient.getAuthToken();
    }

    setAuthToken = (newAuthToken: string) => {
        this.sessionsClient.setAuthToken(newAuthToken);
    }
}