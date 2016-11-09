import angular = require('angular');



export default (()=>{
    
    angular.module('common',[
        'ui.router'
    ])

    .config(($stateProvider:any)=>{
             
        $stateProvider
            .state('app',{
                url:'/app',
                component:'app'
            })
    });
    
}) ();

import './header/header.module';