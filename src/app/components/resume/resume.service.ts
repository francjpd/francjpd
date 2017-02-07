/// <reference types="angular"/>

import {experienceModel} from './experience/model.aux';

import {knowledgeModel} from './technology/model.aux';

import Experience from '../../common/model/experience';
import Knowledge from '../../common/model/knowledge';



interface IResumeService{
    getExperience():Experience[];
    getKnowledge():Knowledge[];
}

export default class ResumeService implements IResumeService{

        static $inject:Array<string> = [];
        constructor(){

        }

        getExperience():Experience[]{
            return experienceModel;
        }

        getKnowledge():Knowledge[]{
            return knowledgeModel;
        }
    
}