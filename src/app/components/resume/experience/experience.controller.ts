///<reference types="angular"/>

import ExperienceService from './experience.service';
import Experience from '../../../common/model/experience';

export default class ExperienceCtrl implements ng.IComponentController{

    static $inject:string[] = ['ExperienceService'];
    experience:Experience[];
    
    constructor(private experienceService:ExperienceService){

    }
    $onInit(){
       this.experience = this.experienceService.getExperience();
        
    }
}