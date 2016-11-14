/// <reference types="angular" />

import AppCtrl from './app.controller';

let template:any = require('ngTemplate!html!./app.html');

export default class AppComponent implements ng.IComponentOptions{
        static NAME:string = 'app';
        templateUrl = template;
        controller =  AppCtrl;
        

        public static $inject:Array<string> = [''];
        constructor(){ 
            console.log(this);
                       
        }  

        public static getInstance():ng.IComponentOptions{
            return new AppComponent();
        }


    }

