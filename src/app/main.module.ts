import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

require('./../sass/styles'); 

import {MainComponent} from './main.component';

import  './common/app.module';

import MainConfig from './main.config';



const  app  = angular
	.module(
		"cv.main",
		[
			'ui.router',
			'common'
			
		])
	.config(MainConfig)
	
	.component('main',MainComponent)
	
	.factory('currentMenu', ['', function(){
	
	var menuItems = [{menu:"about"},{menu:"experience"},{menu:"technology"},{menu:"studies"}];
	return function (){
		
	};
}]);


//angular.module("cv.main",['ngRoute','fox.scrollReveal','sticky','cv.resume','cv.datastore','cv.core','cv.fjpd.animation.directives']);

angular.element(document).ready(function(){

	return angular.bootstrap(document,[app.name]);
})


export default app;
