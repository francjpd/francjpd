/// <reference types="angular"/>

import ResumeCtrl from './resume.controller';

let template = require('ngtemplate!html!./resume.html');

export default class ResumeComponent implements ng.IComponentOptions{
    static NAME:string = 'resume';
    static getInstance():ResumeComponent{
        return new ResumeComponent();
    }
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= ResumeCtrl;
    }


}