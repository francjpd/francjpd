/// <reference types="angular"/>

import angular = require('angular');


let deps:Array<string> = [];

const poleoModule:string = angular
        .module('poleo.effect',deps)
        .name;

//import './sparks/sparks.module';
export default poleoModule;