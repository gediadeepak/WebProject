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
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var httpService_1 = require('./httpService');
var httpSample = (function () {
    function httpSample(serviceObj) {
        this.serviceObj = serviceObj;
        this.showLoading = false;
        this.result = new HomeContent();
        this.service = serviceObj;
    }
    httpSample.prototype.getData = function () {
        this.showLoading = true;
        var self = this;
        this.service.getAllAchievements().map(function (res) { return res.json(); }).subscribe(function (res) {
            self.showLoading = false;
            self.result = res.data;
            console.log(self.result);
        });
    };
    httpSample = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            providers: [httpService_1.Service]
        }),
        angular2_1.View({
            templateUrl: "httpSample.html",
            directives: [angular2_1.NgFor]
        }),
        __param(0, core_1.Inject(httpService_1.Service))
    ], httpSample);
    return httpSample;
})();
exports.httpSample = httpSample;
var HomeContent = (function () {
    function HomeContent() {
        this.Title = '';
        this.Description = '';
    }
    return HomeContent;
})();
angular2_1.bootstrap(httpSample, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=http.js.map