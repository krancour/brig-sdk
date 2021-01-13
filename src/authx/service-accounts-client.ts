import { RestMachineryService } from "../rest-machinery/rest-machinery-service";

export class SessionsClient {
    
    private baseUrl: string;
    private loggedIn: boolean;
    private rms: RestMachineryService;
    private authToken: string;
    
    constructor(baseUrl: string, authToken?: string) {
        
    }

    // Service Accounts requests
    createSA = (callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('POST', 'v2/service-accounts', callback);  
    }

    /*listSAs = (opts: JSON, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('GET', 'v2/service-accounts', callback, queryParams(undefined, opts));  
    }*/

    getSA = (id: String, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('GET', `v2/service-accounts/${id}`, callback);  
    }

    lockSA = (id: String, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('PUT', `v2/service-accounts/${id}/lock`, callback);  
    }

    unlockSA = (id: String, callback?: (status: Number, response: Object) => any) => {
        this.rms.sendRequest('DELETE', `v2/service-accounts/${id}/lock`, callback);  
    }
}