/// <reference types="angular" />

import angular = require('angular');
import footer from './footer.component';

const commonModule:string = 
    
    angular
        .module('common')
        .component('footer',footer.getInstance())
        .name;


