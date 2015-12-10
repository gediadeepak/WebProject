import {Component, View, NgFor, bootstrap } from 'angular2/angular2';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import { Inject} from 'angular2/core';
import {Service} from './httpService';

@Component({
    selector: 'my-app',
    providers: [Service]
})
@View({
    templateUrl: "httpSample.html",
    directives: [NgFor]
})
export class httpSample {
    showLoading: boolean = false;
    result = new HomeContent();
    service: any;
    constructor( @Inject(Service) private serviceObj: Service) {
        this.service = serviceObj;

    }

    getData() {
        this.showLoading = true;

        let self = this;
        this.service.getAllAchievements().map((res: Response) => res.json()).subscribe(function (res) {
            self.showLoading = false;
            self.result = res.data;
            console.log(self.result)
           
        });
         
    }
    
}

class HomeContent {
    Title: string='';
    Description: string ='';
}

bootstrap(httpSample, [HTTP_PROVIDERS]);