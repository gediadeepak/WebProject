import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router, ComponentInstruction, CanReuse} from 'angular2/router';
import {About} from '../about/about';
import {ContactUs} from '../contactus/contactus';
import {ToDoList} from '../todo-list/todoList';

@Component({
    selector: 'demo-page',
    directives: [ROUTER_DIRECTIVES, About, ContactUs,  ToDoList],
    templateUrl: './components/demo-page/demo-page.html'
})

    @RouteConfig([
        new Route({ path: '/about', component: About, name: 'About' }),
        new Route({ path: '/contactus', component: ContactUs, name: 'ContactUs' }),
        new Route({ path: '/todo', component: ToDoList, name: 'ToDoList' }),
])

export class DemoPage {
    
}