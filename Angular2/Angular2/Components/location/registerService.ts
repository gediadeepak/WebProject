import {Component, View} from 'angular2/angular2';
import { Inject} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Registration} from './registrationObject'
export class RegisterService {
    result: Object;
    returnedResult: any;
    constructor( @Inject(Http) private http: Http) {

    }

    saveRegistrationDetails(registerObj: Registration) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var path = '/angular2/Api/Registration/SaveRegistrationDetails';
        return this.http.post(path, JSON.stringify(registerObj), { headers: headers });
    }
    getRegistrationDetails() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var path = '/angular2/Api/registration/GetRegistrationDetails';
        return this.http.get(path);
    }
    logError(err) {
        console.log(err);
    }

    setReturnedResult(retResult) {
        this.returnedResult = retResult;
    }

    getReturnedResult() { return this.returnedResult;}
}