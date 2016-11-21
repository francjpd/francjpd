/// <reference types="angular"/>

import angular = require('angular');
import sparkComponent from './spark.component';
import sparksComponent from './sparks.component';
import './sparks.scss';

let bundle:Array<string> = ['sparks'];

export default (()=>{
    angular
            .module('poleo.effect')
            .component(sparkComponent.NAME,sparkComponent.getInstance())
            .component(sparksComponent.NAME, sparksComponent.getInstance()) ;
})(); 
    
