/// <reference types="angular"/>

import {experienceModel} from './model.aux';

import Experience from '../../../common/model/experience';



interface IExperienceService{
    getExperience():Experience[];
}

export default class ExperienceService implements IExperienceService{

        static $inject:Array<string> = [];
        constructor(){

        }

        getExperience():Experience[]{

            return experienceModel;
        }
    
}