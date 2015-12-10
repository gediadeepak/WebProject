var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var registrationObject_1 = require('./registrationObject');
var registerService_1 = require('./registerService');
var angular2_2 = require('angular2/angular2');
var Register = (function () {
    function Register(locationObj, router, regService, fb) {
        this.locationObj = locationObj;
        this.router = router;
        this.regService = regService;
        this.fb = fb;
        this.payload = null;
        this.showLoading = false;
        this.location = locationObj;
        this.registrationService = regService;
        this.formBuilder = fb;
        this.form = this.formBuilder.group({
            "fname": ['', angular2_2.Validators.required],
            "lname": ['', angular2_2.Validators.required],
            "type": ['home'],
            "address": ['', angular2_2.Validators.required]
        });
    }
    Register.prototype.gotoConfirm = function () {
        var self = this;
        self.showLoading = true;
        this.payload = JSON.stringify(this.form.value);
        var registration = new registrationObject_1.Registration(this.form.controls.fname.value, this.form.controls.lname.value, this.form.controls.type.value, this.form.controls.address.value);
        this.registrationService.saveRegistrationDetails(registration).map(function (res) { return res.json(); }).subscribe(function (res) {
            self.showLoading = false;
            self.result = res;
            console.log(self.result);
            if (self.result.RegDetails.DataSaved == true) {
                self.registrationService.setReturnedResult(self.result);
                self.router.navigateByUrl('/Register/Confirm');
            }
        });
    };
    Register = __decorate([
        angular2_1.Component({
            selector: 'register',
            directives: [router_1.ROUTER_DIRECTIVES, angular2_2.FORM_DIRECTIVES, angular2_2.CORE_DIRECTIVES],
            templateUrl: './components/location/register.html',
            providers: [registerService_1.RegisterService]
        }),
        __param(0, core_1.Inject(router_1.Location)),
        __param(1, core_1.Inject(router_1.Router)),
        __param(2, core_1.Inject(registerService_1.RegisterService)),
        __param(3, core_1.Inject(angular2_2.FormBuilder))
    ], Register);
    return Register;
})();
exports.Register = Register;
//# sourceMappingURL=register.js.map