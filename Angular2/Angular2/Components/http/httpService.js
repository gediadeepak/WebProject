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
var Service = (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getAllAchievements = function () {
        var path = '/angular2/Api/home/getHomeContent';
        return this.http.get(path);
    };
    Service.prototype.mapResult = function (data) {
        this.result = data.data;
        console.log(this.result);
    };
    Service.prototype.logError = function (err) {
        console.log(err);
    };
    Service = __decorate([
        __param(0, core_1.Inject(http_1.Http))
    ], Service);
    return Service;
})();
exports.Service = Service;
//# sourceMappingURL=httpService.js.map