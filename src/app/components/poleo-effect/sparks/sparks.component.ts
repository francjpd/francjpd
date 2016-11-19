/// <reference types="angular"/>

import angular = require('angular');

import SparkController from './sparks.controller';

let template:any = require('!ngTemplate!html!./sparks.html');


class SparkComponentBinding{
    container:string;
    maxSize:string;
    minSize:string;
    color:string;
    width:string;
    height:string;
	isAbsolute:string;
    number:string;

    constructor(){
        this.number = '<';
    }
}

export default class SparksComponent implements ng.IComponentOptions {

	binding:any;
	controller:any;
	templateUrl:any;

    static NAME:string = "sparks"

    static getInstance():ng.IComponentOptions {
        return new SparksComponent();
    }
    static $inject:Array<string> = [];


    constructor(){
		this.controller = SparkController;
		this.templateUrl  = template;
        this.binding = SparkComponentBinding;
	}

}