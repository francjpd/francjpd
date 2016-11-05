import angular = require('angular');

import {app} from './app.component';



export default (()=>{
    
    angular.module('common',[
        'ui.router'
    ])
    .component('app',app)
    .config(($stateProvider:any)=>{
             
        $stateProvider
            .state('app',{
                url:'/app',
                component:'app'
            })
    });
    
}) ();

import './header/header.module';