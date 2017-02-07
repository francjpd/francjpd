require('./experience.scss'); 

import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import experienceComponent from './experience.component';

const experienceModule:ng.IModule = 
        angular
            .module('resume')
            .component('experience',experienceComponent.getInstance())

export default experienceModule;

