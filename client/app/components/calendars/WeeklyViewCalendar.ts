import {Component, OnInit} from 'angular2/core';
import {TimingConstants} from '../../Constants/TimingConstants';
import {DailyViewCalendar} from '../calendars/DailyViewCalendar';





@Component({
    selector: 'weeklyViewCalendar',
    providers: [],
    template: `
                <dailyViewCalendar [cols]="cols" [isWeeklyView]=true>
                    <td class="tableCol" *ngFor="#col of cols; #i=index" [ngClass]="{backgroundRed: col.disabled}" ></td>
                </dailyViewCalendar>
                        `,
    directives: [DailyViewCalendar],
    styles:[
        `
        .tableCol {
             border: 1px solid #ddd;
        }
        .tableCol:hover {
            background-color: #ddd;
        }
        .backgroundRed {
            background-color: #9E0000;
        }
        .backgroundRed:hover {
            background-color: #9E0000;
            cursor: default;
        }
    `
    ]
})

export class WeeklyViewCalendar implements OnInit  {

    cols: any;


    constructor() {
        this.cols = [];
    }

    ngOnInit() {
        this.getRows();
    }

    getRows(){
        for (var i = 0; i < TimingConstants.daysInWeek; i++) {
            var col = {
                disabled: false
            }
            if (i < 1 || i > 5) {
                col.disabled = true;
            }
            this.cols.push(col);
        }
    }




}

var HEROES = [1];