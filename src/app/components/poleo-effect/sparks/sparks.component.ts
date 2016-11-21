/// <reference types="angular"/>

import angular = require('angular');

import SparkController from './sparks.controller';

let template:any = require('!ngTemplate!html!./sparks.html');
 
class SparksComponentBinding{

    private static instance:any;
    maxSize:string;
    minSize:string;
    color:string;
    number:string;

    constructor(){
        this.number = '<';
        this.color = '<';
        this.maxSize = '<';
        this.minSize = '<';
    }

    static getInstance():SparksComponentBinding {
        if(!angular.isDefined(this.instance)){
            this.instance = new SparksComponentBinding(); 
        }
        return new SparksComponentBinding();    
    }
}

export default class SparksComponent implements ng.IComponentOptions {

	bindings:any;
	controller:any;
	templateUrl:any;
    require:any;

    static NAME:string = "sparks";

    static getInstance():ng.IComponentOptions {
        return new SparksComponent();
    }
    static $inject:Array<string> = [];


    constructor(){
        
		this.controller = SparkController;
		this.templateUrl  = template;
        this.bindings = SparksComponentBinding.getInstance();
        console.log(this);
	}

}