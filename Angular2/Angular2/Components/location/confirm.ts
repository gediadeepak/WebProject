import {Component} from 'angular2/angular2';
import { Inject} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {ThankYou} from './thankyou'
import {RegisterService} from './registerService'
import {Registration} from './registrationObject'

@Component({
    selector: 'confirm',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './components/location/confirm.html',
    providers: [RegisterService]
})

export class Confirm {
    location: any;
    registerService: RegisterService;
    result = new Registration();
    showLoading:boolean=false;
    memoryObject: any;
    constructor( @Inject(Location) private locationObj: Location,
        @Inject(Router) public router: Router,
        @Inject(RegisterService) private regService: RegisterService) {
        this.location = locationObj;
        this.registerService = regService;
        this.getRegistrationDetails();
    }
    getRegistrationDetails() {
        let self = this;
        self.showLoading = true;
        this.registerService.getRegistrationDetails().map((res: Response) => res.json()).subscribe(res=> this.mapResult(res));
    }
    mapResult(data) {
        this.result = data.registrationDetails;
        console.log(this.result);
        this.showLoading = false;
    }
    gotoThankYou() {
        this.router.navigateByUrl('/Register/ThankYou');
    }
    gotoRegister() {
        this.router.navigateByUrl('/Register/..');
    }


}