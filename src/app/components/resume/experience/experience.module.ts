require('./experience.scss'); 

import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import experienceComponent from './experience.component';
import experienceService from './experience.service';

const experienceModule:ng.IModule = 
        angular
            .module('resume')
            .component('experience',experienceComponent.getInstance())
            .service('ExperienceService',experienceService);

export default experienceModule;

