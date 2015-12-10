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
var registerService_1 = require('./registerService');
var registrationObject_1 = require('./registrationObject');
var Confirm = (function () {
    function Confirm(locationObj, router, regService) {
        this.locationObj = locationObj;
        this.router = router;
        this.regService = regService;
        this.result = new registrationObject_1.Registration();
        this.showLoading = false;
        this.location = locationObj;
        this.registerService = regService;
        this.getRegistrationDetails();
    }
    Confirm.prototype.getRegistrationDetails = function () {
        var _this = this;
        var self = this;
        self.showLoading = true;
        this.registerService.getRegistrationDetails().map(function (res) { return res.json(); }).subscribe(function (res) { return _this.mapResult(res); });
    };
    Confirm.prototype.mapResult = function (data) {
        this.result = data.registrationDetails;
        console.log(this.result);
        this.showLoading = false;
    };
    Confirm.prototype.gotoThankYou = function () {
        this.router.navigateByUrl('/Register/ThankYou');
    };
    Confirm.prototype.gotoRegister = function () {
        this.router.navigateByUrl('/Register/..');
    };
    Confirm = __decorate([
        angular2_1.Component({
            selector: 'confirm',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './components/location/confirm.html',
            providers: [registerService_1.RegisterService]
        }),
        __param(0, core_1.Inject(router_1.Location)),
        __param(1, core_1.Inject(router_1.Router)),
        __param(2, core_1.Inject(registerService_1.RegisterService))
    ], Confirm);
    return Confirm;
})();
exports.Confirm = Confirm;
//# sourceMappingURL=confirm.js.map