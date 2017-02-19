import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import particlesComponent from './particles.component';

import './particles.scss';

let deps:Array<string> =  ['ui.router'];

const particlesModule:string = 
        angular
            .module('particles',deps)
            .component('particles',particlesComponent.getInstance())
            .name;

export default particlesModule;

