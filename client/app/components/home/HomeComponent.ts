import {Component, OnInit} from 'angular2/core';
import {headerComponent} from '../header/header';
import {toolbarComponent} from '../toolbar/toolbar';



@Component({
    selector: 'home',
    providers: [],
    template: `
                <div class="mainWrapper">
                    <header></header>

                    <div class="contentWrapper">
                    <toolbar></toolbar>
                    <h1 class="title">DAYLY VIEW</h1>
                     <table class="calendar">
                        <tr class="tableRow" *ngFor="#tableRow of tableRows; #i=index">
                            <td class="timingCol">{{tableRow.time}}</td>
                            <td class="tableCol" [ngClass]="{backgroundRed: tableRow.disabled}" ></td>
                        </tr>
                    </table>
                    </div>
                </div>`,
    directives: [headerComponent,toolbarComponent],
    styles:[`
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
        width: 10%;
        border: 1px solid #ddd;
        text-align: center;
    }
    .tableRow {
        cursor: pointer;
        height: 40px;
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

export class HomeComponent  {

    public tableRows = [];

    constructor() {

    }

    ngOnInit() {
        this.createCalendar();
    }

    createCalendar(){
        var date = new Date(0,0,0);
        for (var i = 0; i < 24; i++) {
            var timeString = date.toTimeString().slice(0,8);
            var row = {
                template: "<tr></tr>",
                time: timeString,
                disabled: false
            }
            var hours = date.getHours();
            if (hours > 20 || hours < 8) {
                row.disabled = true;
            }
            console.log(date);
            this.tableRows.push(row);
            date.setHours(date.getHours() + 1);
        }
    }




}

var HEROES = [1];
