import {Component, OnInit} from 'angular2/core';
import {HeaderComponent} from '../header/Header';
import {ToolbarComponent} from '../toolbar/Toolbar';



@Component({
    selector: 'home',
    providers: [],
    template: `
                <div class="mainWrapper">
                    <header></header>
                    <toolbar></toolbar>
                    <div class="contentWrapper">
                        <h1 class="title">Month View</h1>
                        <div class="timingCol" style="display: inline-block" *ngFor="#tableRow of weekRows; #i=index" onclick="javascript:location.href='/dailyView'">
                           {{tableRow.day}}
                        </div>
                    </div>
                </div>`,
    directives: [HeaderComponent,ToolbarComponent],
    styles:[`5 6 7 8
    .calendar {
        border-spacing: 1px;
        width: 90%;
        padding-left: 10px;
    }
    .mainWrapper {
        height: 1000px;
        padding-right: 30px;

    }
    .tableCol {
        width: 90%;
        border: 1px solid #ddd;
    }
    .tableCol:hover {
        background-color: #ddd;
    }
    .timingCol {
        width: 12%;
        height: 150px;
        margin: 5px;
        border-radius: 10px;
        border: 1px solid #ddd;
        text-align: center;
    }
    .tableRow {
        cursor: pointer;
        height: 300px;
    }
    .title {
        text-align: -webkit-center;
        text-decoration: underline;
        font-style: italic;
        font-kerning: initial;
    }
    .backgroundRed {
        background-color: #9E0000;
    }
    .backgroundRed:hover {
        background-color: #9E0000;
        cursor: default;
    }
  `]
})

export class MonthViewComponent  {

    public weekRows = [];

    constructor() {

    }

    ngOnInit() {
        this.createCalendar();
    }
    daysInMonth(month,year) {
        return new Date(year, month, 0).getDate();
    }

    createCalendar(){
        var date = new Date(0,0,0);
        var year = date.getFullYear();
        var month = date.getMonth();
        var countOfDay = this.daysInMonth(year,month);
        for (var i = 1; i <= countOfDay; i++) {
            var row = {
                day: i
            };
            this.weekRows.push(row);
        }
    }




}

var HEROES = [1];
