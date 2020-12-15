const request = require('request');

export class RestMachineryService {
    private baseUrl: string;
    private authToken: string;
    private response: Object;

    constructor(baseUrl: string, authToken?: string) {
        authToken ? this.authToken = authToken : this.authToken = null;
        this.baseUrl = baseUrl;
    }

    sendRequest = (type: string, path: string, callback: Function, queryParams?: Map<string, any>, body?: Object, headers?: Map<string, any>) => {

        path ? path = this.baseUrl + path : path = this.baseUrl;

        if (queryParams) {
            path += this.formatParams(queryParams);
        }

        let req = {
            url: path,
            method: type,
            headers: headers ? headers : {},
            body: body ? body : {}
        };

        console.log(new Date(), type, 'REQUEST:', path, body ? body : '');

        request(req, function (error: any, response: any, body: any) {
            if (error) {
                callback(response.statusCode, error);
            } else {
                callback(response.statusCode, body);
           }
        });
    }

    formatParams = (queryParams: Map<string, any>) => {
        return "?" + Object.keys(queryParams).map(function (key) {
            return key + '=' + encodeURIComponent(queryParams.get(key));
        })
            .join('&');
    }

    isNode = () => {
        return typeof "process" !== "undefined" && process && process.versions && process.versions.node;
    }

    setAuthToken = (authToken: string) => {
        this.authToken = authToken;
    }
}