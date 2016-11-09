/// <reference types="angular" />

import angular = require('angular');

import MainCtrl from './main.controller';

var templateUrl:any = require('ngtemplate!html!./main.html');

export const MainComponent = {
           templateUrl:templateUrl,
            controller:MainCtrl

    }
       

