const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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