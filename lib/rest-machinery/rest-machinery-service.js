"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestMachineryService = void 0;
const request = require('request');
class RestMachineryService {
    constructor(baseUrl, authToken) {
        this.sendRequest = (type, path, callback, queryParams, body, headers) => {
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
            request(req, function (error, response, body) {
                if (error) {
                    callback(response.statusCode, error);
                }
                else {
                    callback(response.statusCode, body);
                }
            });
        };
        this.formatParams = (queryParams) => {
            return "?" + Object.keys(queryParams).map(function (key) {
                return key + '=' + encodeURIComponent(queryParams.get(key));
            })
                .join('&');
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