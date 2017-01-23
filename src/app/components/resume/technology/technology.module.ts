import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import technologyComponent from './technology.component';
import './technology.scss';
const technologyModule:string = 
        angular
            .module('resume')
            .component('technology',technologyComponent.getInstance())
            .name;

export default technologyModule;

