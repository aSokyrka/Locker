import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'toolbar',
    template: `<nav role="main">
                    <div id="wrap">
                        <div id="header"><h1>Document Heading</h1></div>
                        <div id="nav">
                            <ul>
                                <li><a href="#">Option 1</a></li>
                                <li><a href="#">Option 2</a></li>
                            </ul>
                        </div>
                        <div id="main">
                            <h2>Column 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
                        </div>
                        <div id="sidebar">
                            <h2>Column 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                            </ul>
                        </div>
                        <div id="footer">
                            <p>Footer</p>
                        </div>
                    </div>
                </nav>`,
    styles:[`
        nav{
            width: 10%;
            float: left;
            display: inline;
            margin: 0;
            padding: 0;
            height:100%;
            margin-top: 100px;
        }
        body,
        html {
            margin:0;
            padding:0;
            color:#000;
            background:#a7a09a;
        }
        #wrap {
            margin:0 auto;
        }

        #nav {
            background: #ddd;
            width: 100%;
            height: 10%;
            border-radius: 3px;
            text-align: center;
            margin-top: 10px;
            float: left;
        }
        #main {
            background: #ddd;
            width: 100%;
            height: 15%;
            text-align: center;
            float: left;
            margin-top: 10px;
            border-radius: 3px;
        }
        #sidebar {
            background: #ddd;
            width: 100%;
            height: 20%;
            text-align: center;
            float: left;
            margin-top: 10px;
            border-radius: 3px;
        }
        #footer {
            text-align: center;
            margin-top: 10px;
            float: left;
            border-radius: 3px;
        }
        #nav ul {
            margin:0;
            padding:0;
            list-style:none;
        }
        #nav li {
            display:inline;
            margin:0;
            padding:0;
        }
        #header {
            width: 100%;
            float: left;
            height: 15%;
            background: #ddd;
            margin-top: 10px;
            border-radius: 3px;
        }
        h1 {
            margin:0;
        }


        h2 {
            margin:0 0 1em;
        }

        #footer {
            background: #ddd;
            width: 100%;
            height: 10%;
        }
        #footer p {
            margin:0;
        }
        * html #footer {
            height:1px;
        }
    `]
})

export class ToolbarComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
