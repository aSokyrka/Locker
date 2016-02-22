import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'header',
    template: `<div class="header">
                    <a class="lc_button" href="/dailyView">
                        Day
                    </a>
                    <a class="lc_button">
                        Weekly
                    </a>
                    <a class="lc_button" href="/monthView">
                        Month
                    </a>
                </div>`,
    styles:[`
        .lc_button {
            -moz-box-shadow:inset 0px -3px 7px 0px #29bbff;
            -webkit-box-shadow:inset 0px -3px 7px 0px #29bbff;
            box-shadow:inset 0px -3px 7px 0px #29bbff;
            background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2dabf9), color-stop(1, #0688fa));
            background:-moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
            background:-webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
            background:-o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
            background:-ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
            background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);
            background-color:#2dabf9;
            -moz-border-radius:3px;
            -webkit-border-radius:3px;
            border-radius:3px;
            border:1px solid #0b0e07;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:15px;
            padding:9px 23px;
            text-decoration:none;
            text-shadow:0px 1px 0px #263666;
            float: right;
            margin-right: 5px;
        }
        .lc_button:hover {
            background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0688fa), color-stop(1, #2dabf9));
            background:-moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
            background:-webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
            background:-o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
            background:-ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
            background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
            background-color:#0688fa;
        }
        .lc_button:active {
            position:relative;
            top:1px;
        }

        .header {
            height: 60px
        }

`]
})

export class headerComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
