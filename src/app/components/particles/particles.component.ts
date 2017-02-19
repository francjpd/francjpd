/// <reference types="angular"/>

import angular = require('angular');

import ParticlesCtrl from './particles.controller';

let template = require('ngtemplate!html!./particles.template.html');

class particlesComponentBindings{
    private static instance:any;
    isWorking:string;

    constructor(){
        this.isWorking = '<';
    }

    static getInstance(): particlesComponentBindings{
        if(!angular.isDefined(this.instance)){
            this.instance = new particlesComponentBindings();
        }
        return this.instance;
    }
}

export default class ParticlesComponent implements ng.IComponentOptions{

    static NAME:string = 'particles';

    static getInstance():ParticlesComponent{
        return new ParticlesComponent();
    }
    
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= ParticlesCtrl;
        this.bindings = particlesComponentBindings.getInstance();
    }


}