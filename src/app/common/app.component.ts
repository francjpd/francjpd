/// <reference types="angular" />

import AppCtrl from './app.controller';

var template: any = require('ngtemplate!html!./app.html');

export default class AppComponent implements ng.IComponentOptions{
        templateUrl = template;
        controller =  AppCtrl;

        public static $inject:Array<string> = [''];
        constructor(){

        }  

        public static getInstance():ng.IComponentOptions{
            return new AppComponent();
        }


    }

