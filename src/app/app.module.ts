require('./../sass/styles'); 

import angular = require('angular');
import uirouter from 'angular-ui-router';
import 'angular-animate';

import appComponent from './app.component'; 
import appConfig from './app.config';
import './app.scss';

import commonModule from './common/common.module';
import componentsModule from './components/components.module';

let dependencies:Array<string> = ['ui.router',
							'ngAnimate',
							commonModule,
                            componentsModule];
let app = angular
            .module('app',dependencies)
            .component('app',appComponent.getInstance())
            .config(appConfig);

angular.element(document).ready(function(){
    return angular.bootstrap(document,[app.name]);
})
    
export default app;