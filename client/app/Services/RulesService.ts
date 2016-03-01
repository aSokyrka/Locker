import {Component, OnInit, Injectable, Inject} from 'angular2/core';
import {TimingConstants} from '../Constants/TimingConstants';

@Injectable()
export class RulesService {
    tableRows: any;

    constructor() {
        this.tableRows = [];
        var date = new Date(0,0,0);

        for (var i = 0; i < TimingConstants.hoursInDay; i++) {
            var timeString = date.toTimeString().slice(0,8);
            var row = {
                time: timeString,
                disabled: false,
                rowId: i
            }
            var hours = date.getHours();
            if (hours > 20 || hours < 8) {
                row.disabled = true;
            }
            this.tableRows.push(row);
            date.setHours(date.getHours() + 1);
        }
    }

    getRows() {
        return this.tableRows;
    }

    updateRow (id) {
        var rows = this.tableRows;
        rows.forEach(function (row) {
            if (id == row.rowId) {
                row.disabled = true;
            }
        })
        this.tableRows = rows;
    }
}

