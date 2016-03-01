import {Component, OnInit} from 'angular2/core';
import {HeaderComponent} from '../header/Header';
import {ToolbarComponent} from '../toolbar/Toolbar';
import {DailyViewCalendar} from '../calendars/DailyViewCalendar';
import {WeeklyViewCalendar} from '../calendars/WeeklyViewCalendar';
import {MonthViewComponent} from './MonthViewComponent';
import {CalendarTypes} from '../../infoBeans/CalendarTypes';
import {DaysOfTheWeek} from '../../infoBeans/DaysOfTheWeek';





@Component({
    selector: 'home',
    providers: [],
    template: `
                <div class="mainWrapper">
                    <header (toggleType)="changeViewType($event)"></header>

                    <div class="contentWrapper">
                    <toolbar></toolbar>
                    <h1 class="title">{{currentView}} view</h1>
                    <div class="calendar-wrapper">
                    <div class="header-with-days" *ngIf="currentView == CalendarTypes.weekly">
                        <div class="day-title" *ngFor="#day of DaysOfTheWeek; #i=index">{{day}}</div>
                    </div>
                        <dailyViewCalendar *ngIf="currentView == CalendarTypes.daily"></dailyViewCalendar>
                        <weeklyViewCalendar *ngIf="currentView == CalendarTypes.weekly"></weeklyViewCalendar>
                        <monthViewCalendar (toggleType)="changeViewType($event)" *ngIf="currentView == CalendarTypes.monthly"></monthViewCalendar>
                    </div>

                    </div>
                </div>`,
    directives: [HeaderComponent,ToolbarComponent,DailyViewCalendar,WeeklyViewCalendar,MonthViewComponent],
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
        text-transform: uppercase;
    }
    .hidden {
        display: none;
    }
    .day-title {
        display: inline-block;
        width: 14.2%;
        text-align: center;
    }
    .header-with-days {
        padding-left: 10%;
    }
  `]
})

export class HomeComponent implements OnInit  {

    public CalendarTypes = CalendarTypes;
    public currentView = CalendarTypes.daily;
    public DaysOfTheWeek = DaysOfTheWeek;

    changeViewType (type) {
        this.currentView = type;
    }

    constructor() {

    }

    ngOnInit() {

    }

}
