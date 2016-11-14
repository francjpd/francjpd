/// <reference types="angular" />
/// <reference types="angular-ui-router"/>

import angular = require('angular');

import MainCtrl from './main.controller';

let template:any = require('ngtemplate!html!./main.html');

export default class MainComponent implements ng.IComponentOptions  {
           templateUrl:any = template;
           
           controller :any =  MainCtrl;
           static $inject:Array<string> = [''];
           constructor(){}

           public static getInstance():ng.IComponentOptions{
               return new MainComponent();
           }
    }
       

