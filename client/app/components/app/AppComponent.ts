import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {DailyComponent} from '../home/DailyComponent'
import {AboutComponent} from '../about/AboutComponent'
import {MonthViewComponent} from '../home/MonthViewComponent'

@RouteConfig([
    {path: '/dailyView', component: DailyComponent, as: 'DailyView'},
    {path: '/about', component: AboutComponent, as: 'About'},
    {path: '/monthView', component: MonthViewComponent, as: 'MonthView'}
])
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
    
    constructor(){
        console.log("We are up and running!");
    }
    
}