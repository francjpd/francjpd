/// <reference types="angular"/>

import angular = require('angular');

let template:any = require('!ngTemplate!html!./sparks.html');

interface IParticle {
    maxSize:number;
    minSize:number;
    color:string;
    width:number;
    height:number;
	number:number;
}


interface ISparkComponentController extends IParticle {
//	initParticle():void;
	getRandomValue(max:number,min:number):number;
	playIndefinitely(particle:HTMLElement,width:number,height:number):void;
}



export default class SparksController implements ISparkComponentController {

    maxSize:number;
    minSize:number;
    color:string;
    width:number;
    height:number;
	number:[number];

    constructor(){
        this.maxSize=0;
        this.minSize=0
        this.color= '#FFFFFF';
        this.width= 0;
        this.height= 0;
		this.number=[1,2,3];
    }

    private $onInit():void{

    }

    private $onChanges():void{

    }

	getRandomValue(max:number,min:number = 0):number
	{
		var result = 0 ;
		if(max != undefined && max != null)
		{
			if(min == undefined && min == null )
			{
				var min = 1;
			}
			result = Math.ceil(Math.random()*max);
			if(result < min)
			{
				result = min;
			}
		}


		return result;

		
	};

    playIndefinitely(particle:HTMLElement,width:number,height:number):void		
	{
		angular.element(particle).animate(
		{
			top: this.getRandomValue(height)-20,
			left: this.getRandomValue(width)-20,
		},8000+this.getRandomValue(6000),function(){
			this.play(particle,width,height);
		});
	}


}