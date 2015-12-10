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
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.saveRegistrationDetails = function (registerObj) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var path = '/angular2/Api/Registration/SaveRegistrationDetails';
        return this.http.post(path, JSON.stringify(registerObj), { headers: headers });
    };
    RegisterService.prototype.getRegistrationDetails = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var path = '/angular2/Api/registration/GetRegistrationDetails';
        return this.http.get(path);
    };
    RegisterService.prototype.logError = function (err) {
        console.log(err);
    };
    RegisterService.prototype.setReturnedResult = function (retResult) {
        this.returnedResult = retResult;
    };
    RegisterService.prototype.getReturnedResult = function () { return this.returnedResult; };
    RegisterService = __decorate([
        __param(0, core_1.Inject(http_1.Http))
    ], RegisterService);
    return RegisterService;
})();
exports.RegisterService = RegisterService;
//# sourceMappingURL=registerService.js.map