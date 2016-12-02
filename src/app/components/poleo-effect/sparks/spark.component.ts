/// <reference types="angular"/>

import angular = require('angular');

import SparkController from './spark.controller';

let template:any = require('!ngTemplate!html!./spark.html');


class SparkComponentBinding{

    private static instance:SparkComponentBinding;
    color:string;
    width:string;
    height:string;
    sparkId:string;
    
    constructor(){
        this.color = '@';
        this.width = '@';
        this.height = '@';
        this.sparkId = '@';
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
	}

}