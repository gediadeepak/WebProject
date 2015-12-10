import {Component, View} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import { Inject} from 'angular2/core';


export class Service {
    result: Object;
    constructor( @Inject(Http) private http: Http) {
    }

    getAllAchievements(){
        var path = '/angular2/Api/home/getHomeContent';
        return this.http.get(path);
    }
    mapResult(data) {
        this.result = data.data;
        console.log(this.result);
    }
    logError(err) {
        console.log(err);
    }
}