import angular = require('angular');

import menuComponent from './menu.component';

export default (()=>{
    'use strict';
    angular
        .module('common')
        .component('menu',menuComponent.getInstance());
})();