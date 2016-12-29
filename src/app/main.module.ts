import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';
import 'angular-animate';

require('./../sass/styles'); 

import mainComponent from './main.component';

import  './common/app.module';

import './components/components.module';

import'./resume/resume.module';

import MainConfig from './main.config';


let bundle:Array<string> = ['ui.router',
							'ngAnimate',
							'common',
							'components',
							'cv.main.resume'];

interface MenuItem {
	menu:string;
}

const  app:ng.IModule  = angular
	.module("cv.main",bundle)
	.config(MainConfig)
	.component('main',mainComponent.getInstance())

//angular.module("cv.main",['ngRoute','fox.scrollReveal','sticky','cv.resume','cv.datastore','cv.core','cv.fjpd.animation.directives']);

angular.element(document).ready(function(){
	
	return angular.bootstrap(document,[app.name]);
})


export default app;
