import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import resumeComponent from './resume.component';

import ResumeConfig from './resume.config';

let bundle:Array<string> =  ['ui.router'];

const resumeModule:ng.IModule = 
        angular
            .module('cv.main.resume',bundle)
            .component('resume',resumeComponent.getInstance())
            .config(ResumeConfig);

export default resumeModule;

