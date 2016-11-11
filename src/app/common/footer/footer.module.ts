/// <reference types="angular" />

import angular = require('angular');
import footer from './footer.component';

export default ( ()=>{
    
    angular
        .module('common')
        .component('footer',footer.getInstance());



}) ();