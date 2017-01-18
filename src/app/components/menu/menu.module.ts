import angular = require('angular');

import menuComponent from './menu.component';

let deps:Array<string> = [];

const menuModule:string = 
        angular
            .module('menu',deps)
            .component('menuBar',menuComponent.getInstance())
            .name;


export default menuModule ;
