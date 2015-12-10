import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import { Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';

import {Confirm} from './confirm'
import {ThankYou} from './thankyou'
import {Registration} from './registrationObject'
import {RegisterService} from './registerService'
import {FORM_DIRECTIVES, FormBuilder, CORE_DIRECTIVES, Validators, ControlGroup, Host} from 'angular2/angular2'
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
@Component({
    selector: 'register',
    directives: [ROUTER_DIRECTIVES,FORM_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: './components/location/register.html',
    providers: [RegisterService]
})
     
export class Register {
    location: any;
    form;
    payload=null;
    showLoading: boolean = false;
    formBuilder: FormBuilder;
    result: any;
    
    registrationService: RegisterService;
    constructor( @Inject(Location) private locationObj: Location,
        @Inject(Router) private router: Router,
        @Inject(RegisterService) private regService: RegisterService,
        @Inject(FormBuilder) private fb: FormBuilder) {
        this.location = locationObj;
        this.registrationService = regService;
        this.formBuilder = fb;
        
        this.form = this.formBuilder.group({
            "fname": ['', Validators.required],
            "lname": ['', Validators.required],            
            "type": ['home'],
            "address": ['', Validators.required]
        });
    }

    gotoConfirm() {
        let self = this;
        self.showLoading = true;
        this.payload = JSON.stringify(this.form.value);
        var registration = new Registration(this.form.controls.fname.value, this.form.controls.lname.value, this.form.controls.type.value, this.form.controls.address.value);
        this.registrationService.saveRegistrationDetails(registration).map((res: Response) => res.json()).subscribe(function (res) {
            self.showLoading = false;
            self.result = res;
            console.log(self.result)
            if (self.result.RegDetails.DataSaved == true) {
                self.registrationService.setReturnedResult(self.result);
                self.router.navigateByUrl('/Register/Confirm');
            }
        });
        
    }
}