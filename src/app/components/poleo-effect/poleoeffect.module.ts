/// <reference types="angular"/>

import angular = require('angular');

let bundle:Array<string> = ['sparks'];

const poleoModule:ng.IModule = angular
        .module('poleo.effect',bundle);

import './sparks/sparks.module';
export default poleoModule;