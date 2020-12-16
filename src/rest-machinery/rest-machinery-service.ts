const axios = require('axios').default;

export class RestMachineryService {
    private baseUrl: string;
    private authToken: string;
    private response: Object;

    constructor(baseUrl: string, authToken?: string) {
        authToken ? this.authToken = authToken : this.authToken = null;
        this.baseUrl = baseUrl;
    }

    sendRequest = (type: string, path: string, callback: Function, queryParams?: Map<string, any>, body?: Object, headers?: Map<string, any>) => {

        console.log(new Date(), type, 'REQUEST:', path, body ? body : '');

        axios({
            method: type,
            baseUrl: this.baseUrl,
            url: path,
            params: queryParams,
            data: body,
            headers: headers,
            responseType: 'json',
            validateStatus: function (status: any) {
                return status >= 200 && status < 300;
            }
        })
            .then(function (response: any) {
                callback(response.status, response.data);
            })
            .catch(function (error: any) {
                if (error.response) {
                    callback(error.response.status, error.response.data);
                } else if (error.request) {
                    callback(504, {
                        'success': false,
                        'message': 'Request timed out'
                    });
                } else {
                    callback(400, {
                        'success': false,
                        'message': 'Something went wrong while trying to perform request'
                    });
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