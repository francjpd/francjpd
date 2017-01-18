/// <reference types='angular' />
/// <reference types='angular-ui-router'/>

import ResumeState from './resume.state';

export default function ResumeConfig($stateProvider: ng.ui.IStateProvider){
        
    $stateProvider.state(ResumeState.getInstance());
}