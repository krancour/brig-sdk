export class RestMachineryService {
    private baseUrl: string;
    private authToken: string;
    private response: Object;

    constructor(authToken: string) {
        this.baseUrl = 'https://brignext.byu.kashti.sh/';
        this.authToken = authToken;
    }

    sendRequest(type: string, path: string, callback: Function, queryParams?: Object, body?: Object, headers?: Object) {

        path ? path = this.baseUrl + path : path = this.baseUrl;

        if (queryParams) {
            path += this.formatParams(queryParams);
        }

        var xhr = new XMLHttpRequest();
        xhr.open(type, path);

        for (var header in headers) {
            xhr.setRequestHeader(header, headers[header]);
        }

        xhr.setRequestHeader('Authorization', 'Bearer ' + this.authToken);
        xhr.responseType = 'json';

        xhr.onload, xhr.onerror = function (e) {
            var res = JSON.parse(xhr.responseText);
            callback(xhr.status, res);
        };

        body ? xhr.send(body.toString().replace(/\s/g, '')) : xhr.send();

    }

    formatParams(queryParams) {
        return "?" + Object.keys(queryParams).map(function (key) {
            return key + '=' + encodeURIComponent(queryParams[key]);
        })
            .join('&');
    }
}