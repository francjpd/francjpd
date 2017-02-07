///<reference types="angular"/>

import Experience from '../../../common/model/experience';

export default class ExperienceCtrl implements ng.IComponentController{

  
    experience:Experience[];
    
    constructor(){

    }
    $onChanges(){
   
    
    }
    showExperience(card,$event):void{
        card.showExperience = !card.showExperience;
        console.log($event);
        console.log( angular.element(event));
        if($event.target === )

    }
} 