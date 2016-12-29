import angular = require('angular');

import appComponent from './app.component'; 
import appConfig from './app.config';
import './app.scss';
export default (()=>{
    angular.module('common',[
        'ui.router',
        'components'
    ])
    
    .component('app',appComponent.getInstance())
    .config(appConfig);
    
}) ();

import './header/header.module';
import './footer/footer.module';