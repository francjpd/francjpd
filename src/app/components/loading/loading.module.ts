import './loading.scss';
import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import loadingComponent from './loading.component';

let deps:Array<string> =  ['ui.router'];

const loadingModule:string = 
        angular
            .module('loading',deps)
            .component('loading',loadingComponent.getInstance())
            .name;

export default loadingModule;

