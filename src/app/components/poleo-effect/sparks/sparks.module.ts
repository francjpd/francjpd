/// <reference types="angular"/>

import angular = require('angular');
import sparksComponent from './sparks.component';

let bundle:Array<string> = ['sparks'];

export default (()=>{
    angular
            .module('poleo.effect')
            .component(sparksComponent.NAME, sparksComponent.getInstance()) ;
})(); 
    
