import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import resumeComponent from './resume.component';

import ResumeConfig from './resume.config';

let deps:Array<string> =  ['ui.router'];

const resumeModule:string = 
        angular
            .module('resume',deps)
            .component('resume',resumeComponent.getInstance())
            .config(ResumeConfig)
            .name;

export default resumeModule;


import './experience/experience.module';
import './technology/technology.module';