"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestMachineryService = void 0;
const axios = require('axios').default;
class RestMachineryService {
    constructor(baseUrl, authToken) {
        this.sendRequest = (type, path, callback, queryParams, body, headers) => {
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
                validateStatus: function (status) {
                    return status >= 200 && status < 300;
                }
            })
                .then(function (response) {
                if (callback) {
                    try {
                        callback(response.status, response.data);
                    }
                    catch (error) {
                        console.error('Invalid Callback Error:', error);
                    }
                }
            })
                .catch(function (error) {
                if (error.response) {
                    if (callback) {
                        try {
                            callback(error.response.status, error.response.data);
                        }
                        catch (error) {
                            console.error('Invalid Callback Error:', error);
                        }
                    }
                }
                else if (error.request) {
                    if (callback) {
                        try {
                            callback(504, {
                                'success': false,
                                'message': 'Request timed out'
                            });
                        }
                        catch (error) {
                            console.error('Invalid Callback Error:', error);
                        }
                    }
                }
                else {
                    if (callback) {
                        try {
                            callback(400, {
                                'success': false,
                                'message': 'Something went wrong while trying to perform request'
                            });
                        }
                        catch (error) {
                            console.error('Invalid Callback Error:', error);
                        }
                    }
                }
            });
        };
        this.isNode = () => {
            return typeof "process" !== "undefined" && process && process.versions && process.versions.node;
        };
        this.setAuthToken = (authToken) => {
            this.authToken = authToken;
        };
        authToken ? this.authToken = authToken : this.authToken = null;
        this.baseUrl = baseUrl;
    }
}
exports.RestMachineryService = RestMachineryService;
//# sourceMappingURL=rest-machinery-service.js.map