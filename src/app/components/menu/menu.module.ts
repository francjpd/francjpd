import angular = require('angular');

import menuComponent from './menu.component';

export default (()=>{
    'use strict';
    angular
        .module('components')
        .component('menu',menuComponent.getInstance());

})();

