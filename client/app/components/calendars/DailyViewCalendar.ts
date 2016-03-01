import {Component, OnInit, TemplateRef, ContentChild,Attribute } from 'angular2/core';
import {COMMON_DIRECTIVES, CORE_DIRECTIVES } from 'angular2/common';
import {TimingConstants} from '../../Constants/TimingConstants';
import {RulesService} from '../../Services/RulesService';



@Component({
    selector: 'dailyViewCalendar',
    providers: [],
    template: `
                <div class="daily-view-calendar">
                    <table class="calendar-table" >
                        <tr class="tableRow" *ngFor="#tableRow of tableRows; #i=index">
                            <td class="timingCol">{{tableRow.time}}</td>
                            <td class="tableCol" [ngClass]="{hidden: isWeeklyView,backgroundRed: tableRow.disabled}" attr.rowId={{tableRow.rowId}} on-click="updateRow($event)"> </td>
                            <template ngFor [ngForOf]="cols" [ngForTemplate]="itemTmpl"></template>
                        </tr>
                    </table>
                </div>`,
    styles:[
    `
        .tableCol {
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
        .calendar-table {
            width: 100%;
        }
        .backgroundRed {
            background-color: #9E0000;
        }
        .backgroundRed:hover {
            background-color: #9E0000;
            cursor: default;
        }
        .hidden {
            display: none;
        }

    `
    ],
    directives:[COMMON_DIRECTIVES,CORE_DIRECTIVES],
    inputs:[
        'cols:cols',
        'isWeeklyView:isWeeklyView'
    ]
})

export class DailyViewCalendar implements OnInit  {

    private cols;
    private isWeeklyView;
    tableRows: any;
    public TimingConstants = TimingConstants;

    @ContentChild(TemplateRef) itemTmpl;

    constructor(public RulesService:RulesService) {
        this.tableRows = [];
    }

    ngOnInit() {
        this.createCalendar();
    }

    createCalendar(){
        var rows = this.RulesService.getRows();
        this.tableRows = rows;
    }

    updateRow (event) {
        var id = event.target.getAttribute('rowId');
        this.RulesService.updateRow(parseInt(id));
        var rows = this.RulesService.getRows();
        this.tableRows = rows;
    }


}

var HEROES = [1];