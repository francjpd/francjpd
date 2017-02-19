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

}


export default class SparksController implements ISparksComponentController {

    maxS:number;
    minS:number;
    color:string;
	number:number;
	sparks:Array<any>;
	id:string;
	parentContainer:any;
	
	static $inject:Array<String> = ['$element'];
    constructor(public $element:any){
		this.parentContainer = $element;
	
		
	}

    private $onInit():void{
		console.log('second');
		
		this.number = 0 ;
		this.maxS = 0 ;
		this.minS = 1;
		this.color = "white";		
	}

    private $onChanges():void{
	console.log('first');
	
		if(this.number > 0  && this.maxS > 0){
			this.sparks = new Array<any>();
			for(let i = 0 ; i <this.number ; i++){
				this.sparks.push({	id:i,
									color:this.color,
									width:this.getRandomValue(this.maxS,this.minS),
									height:this.getRandomValue(this.maxS,this.minS)
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


}