/// <reference types="angular"/>

import angular = require('angular');

import SparkController from './spark.controller';

let template:any = require('!ngTemplate!html!./sparks.html');


class SparkComponentBinding{

    private static instance:SparkComponentBinding;
    color:string;
    width:string;
    height:string;

    static $inject = [''];
    constructor(){
        this.color = '<';
        this.width = '<';
        this.height = '<';
    }

     static getInstance():SparkComponentBinding {
        if(!angular.isDefined(this.instance)){
            this.instance = new SparkComponentBinding(); 
        }
        return new SparkComponentBinding();    
    }
}

export default class SparkComponent implements ng.IComponentOptions {

	bindings:any;
	controller:any;
	templateUrl:any;
    require:any;

    static NAME:string = "spark";

    static getInstance():ng.IComponentOptions {
        return new SparkComponent();
    }
    static $inject:Array<string> = [];


    constructor(){
        
		this.controller = SparkController;
		this.templateUrl  = template;
        this.bindings = SparkComponentBinding.getInstance();
        console.log(this);
	}

}