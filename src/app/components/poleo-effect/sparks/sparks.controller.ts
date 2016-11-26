/// <reference types="angular"/>

import angular = require('angular');

interface ISparks {
    maxS:number;
    minS:number;
    color:string;
	number:number;
	id:string;
}


interface ISparksComponentController extends ISparks {
	getRandomValue(max:number,min:number):number;
	playIndefinitely(particle:HTMLElement,width:number,height:number):void;
}


export default class SparksController implements ISparksComponentController {

    maxS:number;
    minS:number;
    color:string;
	number:number;
	sparks:Array<any>;
	id:string;
	parentContainer:JQuery;
	
    constructor(){}

    private $onInit():void{
		this.number = 0 ;
		this.maxS = 0 ;
		this.minS = 1;
		this.color = "white";
		this.parentContainer = angular.element(this.id).parent();

		
	}

    private $onChanges():void{
		
		if(this.number > 0  && this.maxS > 0){
			this.sparks = new Array<any>();
			for(let i = 0 ; i <this.number ; i++){
				this.sparks.push({	id:i,
									color:this.color,
									width:this.getRandomValue(this.maxS,this.minS),
									height:this.getRandomValue(this.maxS,this.minS),
								}); 				
				
			}
		}
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