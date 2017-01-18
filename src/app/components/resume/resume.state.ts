/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>

import resumeComponent from './resume.component';

export default class ResumeState implements angular.ui.IState {

    name:string;
    component:string;
    template:string;
    parent:string;
    url:string;

    constructor(){
        this.name = 'resume';
        this.url = 'resume';
        this.component = resumeComponent.NAME;
    }
    static getInstance():angular.ui.IState{
        return new ResumeState();
    }

} 