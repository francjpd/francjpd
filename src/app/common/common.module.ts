
import angular = require('angular');
import uirouter from 'angular-ui-router';
import 'angular-animate';

let dependencies:Array<string> = ['ui.router',
							'ngAnimate',
							];
 const commonModule:string =  angular
            .module('common',dependencies)
            .name;

    
export default commonModule;

import './header/header.module';
import './footer/footer.module';