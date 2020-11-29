import { RestMachineryService } from "../rest-machinery/rest-machinery-service";

export class SessionsClient {
    
    private baseUrl: string;
    private loggedIn: boolean;
    private rms: RestMachineryService;
    private authToken: string;
    
    constructor(baseUrl: string, authToken?: string) {
        this.baseUrl = baseUrl;
        this.loggedIn = false;
        this.rms = new RestMachineryService(baseUrl, authToken);
        authToken ? this.authToken = authToken : this.authToken = this.login();
    }

    login = () => {
        // TODO: implement login functionality here via network call

        // Until login functionality is accomplished, define this string here to simulate a network request and response
        const fakeToken = '';
        if(!this.rms.isNode()) {
            localStorage.jwt = fakeToken;
        }
        return fakeToken;
    }

    logout = () => {
        // TODO: implement logout functionality here via network call

        if(!this.rms.isNode()) {
            localStorage.removeItem('jwt');
        }
        this.authToken = undefined;
        this.rms.setAuthToken(this.authToken);
    }

    getAuthToken = () => {
        if(!this.rms.isNode() && localStorage.jwt) {
            this.authToken = localStorage.jwt;
        }
        return this.authToken ? this.authToken : this.login();
    }

    setAuthToken = (newAuthToken: string) => {
        this.rms.setAuthToken(newAuthToken);
        this.authToken = newAuthToken;
        if(!this.rms.isNode()) {
            localStorage.jwt = newAuthToken;
        }
    }
}