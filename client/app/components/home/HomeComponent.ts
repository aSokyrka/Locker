import {Component, OnInit} from 'angular2/core';
import {HeaderComponent} from '../header/Header';
import {ToolbarComponent} from '../toolbar/Toolbar';
import {DailyViewCalendar} from '../calendars/DailyViewCalendar';
import {WeeklyViewCalendar} from '../calendars/WeeklyViewCalendar';
import {CalendarTypes} from '../../infoBeans/CalendarTypes';
import {DaysOfTheWeek} from '../../infoBeans/DaysOfTheWeek';





@Component({
    selector: 'home',
    providers: [],
    template: `
                <div class="mainWrapper">
                    <header></header>

                    <div class="contentWrapper">
                    <toolbar></toolbar>
                    <h1 class="title">DAYLY VIEW</h1>
                    <div class="calendar-wrapper">
                    <div class="header-with-days">
                        <div class="day-title" *ngFor="#day of DaysOfTheWeek; #i=index">{{day}}</div>
                    </div>
                        <dailyViewCalendar [ngClass]="{hidden: currentView != CalendarTypes.daily}"></dailyViewCalendar>
                        <weeklyViewCalendar [ngClass]="{hidden: currentView != CalendarTypes.weekly}"><div class="asdasd"></div></weeklyViewCalendar>
                    </div>

                    </div>
                </div>`,
    directives: [HeaderComponent,ToolbarComponent,DailyViewCalendar,WeeklyViewCalendar],
    styles:[`
    .calendar-wrapper {
        border-spacing: 1px;
        display: inline-block;
        width: 88%;
        padding-left: 10px;
    }
    .mainWrapper {
        height: 1000px;
        padding-right: 30px;

    }
    .title {
        text-align: -webkit-center;
        text-decoration: underline;
        font-style: italic;
        font-kerning: initial;
    }
    .hidden {
        display: none;
    }
    .day-title {
        display: inline-block;
    }
  `]
})

export class HomeComponent implements OnInit  {

    public CalendarTypes = CalendarTypes;
    public currentView = CalendarTypes.weekly;
    public DaysOfTheWeek = DaysOfTheWeek;

    constructor() {

    }

    ngOnInit() {

    }

}
