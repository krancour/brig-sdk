"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestMachineryService = void 0;
class RestMachineryService {
    constructor(baseUrl, authToken) {
        this.sendRequest = (type, path, callback, queryParams, body, headers) => {
            path ? path = this.baseUrl + path : path = this.baseUrl;
            if (queryParams) {
                path += this.formatParams(queryParams);
            }
            var xhr = new XMLHttpRequest();
            xhr.open(type, path);
            for (var header in headers) {
                xhr.setRequestHeader(header, headers.get(header));
            }
            xhr.setRequestHeader('Authorization', 'Bearer ' + this.authToken);
            xhr.responseType = 'json';
            xhr.onload, xhr.onerror = function (e) {
                var res = JSON.parse(xhr.responseText);
                callback(xhr.status, res);
            };
            body ? xhr.send(body.toString().replace(/\s/g, '')) : xhr.send();
            console.log(new Date(), type, 'REQUEST:', path);
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