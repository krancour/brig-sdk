import { RestMachineryService } from "../rest-machinery/rest-machinery-service";

export class SessionsClient {
    
    private baseUrl: string;
    private loggedIn: boolean;
    private rms: RestMachineryService;
    private authToken: string;
    
    constructor(baseUrl: string, authToken?: string) {
        
    }

    // Users requests
    /*listUsers = (opts: JSON, callback?: (status: Number, response: Object) => any) => {
        // In addition to the above questions, how will we handle query parameters like the ones this request requires?
        this.rms.sendRequest('GET', 'v2/users', callback, queryParams(undefined, opts));  
    }*/

    getUser = (id: String, callback?: (status: Number, response: Object) => any) => {
        // Using template strings from Javascript to add the provided id to the path
        this.rms.sendRequest('GET', `v2/users/${id}`, callback);  
    }

    lockUser = (id: String, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('PUT', `v2/users/${id}/lock`, callback);  
    }

    unlockUser = (id: String, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('DELETE', `v2/users/${id}/lock`, callback);  
    }
}