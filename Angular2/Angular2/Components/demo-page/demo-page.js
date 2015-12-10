var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var about_1 = require('../about/about');
var contactus_1 = require('../contactus/contactus');
var todoList_1 = require('../todo-list/todoList');
var DemoPage = (function () {
    function DemoPage() {
    }
    DemoPage = __decorate([
        angular2_1.Component({
            selector: 'demo-page',
            directives: [router_1.ROUTER_DIRECTIVES, about_1.About, contactus_1.ContactUs, todoList_1.ToDoList],
            templateUrl: './components/demo-page/demo-page.html'
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/about', component: about_1.About, name: 'About' }),
            new router_1.Route({ path: '/contactus', component: contactus_1.ContactUs, name: 'ContactUs' }),
            new router_1.Route({ path: '/todo', component: todoList_1.ToDoList, name: 'ToDoList' }),
        ])
    ], DemoPage);
    return DemoPage;
})();
exports.DemoPage = DemoPage;
//# sourceMappingURL=demo-page.js.map