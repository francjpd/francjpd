import angular = require('angular');

import appComponent from './app.component'; 
import appConfig from './app.config';


export default (()=>{
    angular.module('common',[
        'ui.router'
    ])
    
    .component('app',appComponent.getInstance())
    .config(appConfig);
    
}) ();

import './header/header.module';
import './footer/footer.module';