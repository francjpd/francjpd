/// <reference types="angular"/>

import angular = require('angular');

let bundle:Array<string> = ['poleo.effect'];

const components:ng.IModule = angular
        .module('components',bundle);

import './poleo-effect/poleoeffect.module'; 
import './menu/menu.module';

export default components;

