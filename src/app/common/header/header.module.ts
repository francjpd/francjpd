/// <reference types="angular" />

import angular = require('angular');
import header from './header.component';

import './header.scss';

export default (()=>{

    angular
        .module('common')
        .component('header',header.getInstance())
        .name;

}) ();

