import angular = require('angular');

import {header} from './header.component';

export default (()=>{

    angular
        .module('common')
        .component('header',header)

}) ();

