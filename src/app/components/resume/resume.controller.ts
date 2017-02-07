///<reference types="angular"/>

import Experience from '../../common/model/experience';
import Knowledge from '../../common/model/knowledge';

import ResumeService from './resume.service';

export default class ResumeCtrl implements ng.IComponentController{

    experience:Experience[];
    knowledge:Knowledge[];
        
    static $inject:string[] = ['ResumeService'];
    constructor(private resumeService:ResumeService){
        
    }
    $onInit(){
         this.experience = this.resumeService.getExperience();
         this.knowledge = this.resumeService.getKnowledge();
    }
}