/// <reference types="angular"/>

import angular = require('angular');

let bundle:Array<string> = [];

const poleoModule:ng.IModule = angular
        .module('poleo.effect',bundle);

import './sparks/sparks.module';
export default poleoModule;