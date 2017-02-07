/// <reference types="angular"/>

import angular = require('angular');

import RatingCtrl from './rating.controller';

let template = require('ngtemplate!html!./rating.template.html');

class ratingComponentBindings{
    private static instance:any;
    value:string;

    constructor(){
        this.value = '<';
    }

    static getInstance(): ratingComponentBindings{
        if(!angular.isDefined(this.instance)){
            this.instance = new ratingComponentBindings();
        }
        return this.instance;
    }
}

export default class RatingComponent implements ng.IComponentOptions{

    static NAME:string = 'rating';

    static getInstance():RatingComponent{
        return new RatingComponent();
    }
    
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= RatingCtrl;
        this.bindings = ratingComponentBindings.getInstance();
    }


}