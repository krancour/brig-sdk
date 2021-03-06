const axios = require('axios').default;

export class RestMachineryService {
    private baseUrl: string;
    private authToken: string;
    private response: Object;

    constructor(baseUrl: string, authToken?: string) {
        authToken ? this.authToken = authToken : this.authToken = null;
        this.baseUrl = baseUrl;
    }

    sendRequest = (type: string, path: string, callback: Function, queryParams?: Map<string, any>, body?: Object, headers?: Object) => {

        headers ? headers = {
            ...headers,
            ...{ 'Authorization': 'Bearer ' + this.authToken }
        } :
            headers = {
                'Authorization': 'Bearer ' + this.authToken
            };

        console.log(new Date(), type, 'REQUEST:', this.baseUrl + path, '\n', body ? body : '');

        axios({
            method: type,
            url: this.baseUrl + path,
            params: queryParams,
            data: body,
            headers: headers,
            responseType: 'json',
            validateStatus: function (status: any) {
                return status >= 200 && status < 300;
            }
        })
            .then(function (response: any) {
                if (callback) {
                    try {
                        callback(response.status, response.data);
                    } catch (error) {
                        console.error('Invalid Callback Error:', error);
                    }
                }
            })
            .catch(function (error: any) {
                if (error.response) {
                    if (callback) {
                        try {
                            callback(error.response.status, error.response.data);
                        } catch (error) {
                            console.error('Invalid Callback Error:', error);
                        }
                    }
                } else if (error.request) {
                    if (callback) {
                        try {
                            callback(504, {
                                'success': false,
                                'message': 'Request timed out'
                            });
                        } catch (error) {
                            console.error('Invalid Callback Error:', error);
                        }
                    }
                } else {
                    if (callback) {
                        try {
                            callback(400, {
                                'success': false,
                                'message': 'Something went wrong while trying to perform request'
                            });
                        } catch (error) {
                            console.error('Invalid Callback Error:', error);
                        }
                    }
                }
            });
    }

    isNode = () => {
        return typeof "process" !== "undefined" && process && process.versions && process.versions.node;
    }

    setAuthToken = (authToken: string) => {
        this.authToken = authToken;
    }
}