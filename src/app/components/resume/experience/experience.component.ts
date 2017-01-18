/// <reference types="angular"/>

import ExperienceCtrl from './experience.controller';
import ExperienceService from './experience.service';

let template = require('ngtemplate!html!./experience.html');

export default class ExperienceComponent implements ng.IComponentOptions{

    static NAME:string = 'experience';

    static getInstance():ExperienceComponent{
        return new ExperienceComponent();
    }
    
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= ExperienceCtrl;
    }


}