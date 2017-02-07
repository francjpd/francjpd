/// <reference types="angular"/>

import angular = require('angular');

import TechnologyCtrl from './technology.controller';

let template = require('ngtemplate!html!./technology.template.html');

class technologyComponentBindings{
    private static instance:any;
    knowledge:string;

    constructor(){
        this.knowledge = '<';
    }

    static getInstance(): technologyComponentBindings{
        if(!angular.isDefined(this.instance)){
            this.instance = new technologyComponentBindings();
        }
        return this.instance;
    }
}

export default class TechnologyComponent implements ng.IComponentOptions{

    static NAME:string = 'technology';

    static getInstance():TechnologyComponent{
        return new TechnologyComponent();
    }
    
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= TechnologyCtrl;
        this.bindings = technologyComponentBindings.getInstance();
    }


}