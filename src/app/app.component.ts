/// <reference types="angular" />

import AppCtrl from './app.controller';

let template:any = require('ngTemplate!html!./app.html');

export default class AppComponent implements ng.IComponentOptions{
     
        templateUrl:any;
        controller:any;
        
        static NAME:string = 'app';

        public static $inject:Array<string> = [''];
        constructor(){ 
            this.controller = AppCtrl;
            this.templateUrl = template;
                       
        }  
        
        public static getInstance():ng.IComponentOptions{
            return new AppComponent();
        }


    }

