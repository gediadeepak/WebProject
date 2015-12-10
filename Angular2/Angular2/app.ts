import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Location, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';
import {DemoPage} from './components/demo-page/demo-page';
import {Home} from './components/home/home';
import {httpSample} from './components/httpSample/http'
import {Register} from './components/location/register'
import {Confirm} from './components/location/confirm'
import {ThankYou} from './components/location/thankyou'
import { Inject} from 'angular2/core';
declare var System: any;

@Component(
    {
        selector: 'demo-app',
        templateUrl: './app.html',
        directives: [ROUTER_DIRECTIVES]
    })

    @RouteConfig([
        new Route({ path: '/', component: Home, name: 'Home' }),
        new Route({ path: '/demo/...', component: DemoPage, name: 'Demo' }),
        new Route({ path: '/http', component: httpSample, name: 'Http' }),
        new Route({ path: '/Register/..', component: Register, name: 'Register' }),
        new Route({ path: '/Register/Confirm', component: Confirm, name: 'Confirm' }),
        new Route({ path: '/Register/ThankYou', component: ThankYou, name: 'ThankYou' }),
        
])

class MyDemoApp {

    location: any;
    router: any;
    
    constructor( @Inject(Location) private locationObj: Location, @Inject(Router) private routerObj: Router ) {
        this.location = locationObj;
        this.router = routerObj;
        
    }
     
    getLinkStyle(path) {
         if(path === this.location.path()){
            return true;
        }
        else if(path.length > 0){
            return this.location.path().indexOf(path) > -1;
        }
          
    }

    gotoConfirm() {
        this.location.go('/Confirm');
    }
}

class ComponentHelper {

    static LoadComponentAsync(name, path) {
        return System.import(path).then(c => c[name]);
    }
}

bootstrap(MyDemoApp, [ROUTER_BINDINGS, HTTP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);