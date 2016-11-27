/// <reference types="angular"/>

import angular = require('angular');

let template:any = require('!ngTemplate!html!./sparks.html');


interface ISpark {
    width:number;
    height:number;
    color:string;
    sparkId:string;
}


interface ISparkComponentController extends ISpark {
	playIndefinitely(particle:HTMLElement,width:number,height:number):void;
}


export default class SparkController implements ISparkComponentController {

    width:number;
    height:number;
    color:string;
    sparkId:string;
    element:HTMLElement;
    
private style:any;
    
    static getInstance():Sparksontroller{
        return new SparkController();
    }

    public static $inject:Array<string> = ['$element'];
    constructor($element:HTMLElement){
        this.element = $element;
        console.log($element);
        
    }

    private $postLink():void{       
        
        let element = $("[spark-id='spark"+this.sparkId+"'");
        console.log(this);
        console.log(element);
        
        
    }
    
    private $onChanges():void{

        this.style = {
            width:this.width+'px',
            height:this.height+'px',
            color:this.color
        };


        
        

    }

	private getRandomValue(max:number,min:number = 0):number
	{
		var result = 0 ;

        result = Math.ceil(Math.random()*max);
        if(result < min)
        {
            result = min;
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