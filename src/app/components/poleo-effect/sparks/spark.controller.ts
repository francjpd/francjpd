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
	playIndefinitely():void;
}


export default class SparkController implements ISparkComponentController {

    private static  EVENT:string = 'SparkFinishedPlaying';
    width:number;
    height:number;
    color:string;
    sparkId:string;
    element:HTMLElement;
    scope:ng.IScope;
    
private style:any;
    
    static getInstance($element,$scope):SparkController{
        return new SparkController($element,$scope);
    }

    public static $inject:Array<string> = ['$element','$scope'];
    constructor($element:HTMLElement,$scope:ng.IScope){
        this.element = $element;
        this.scope = $scope;
        
    }

    private $postLink():void{       
            
    this.scope.$on(SparkController.EVENT,($event)=>{
        $event.stopPropagation();
     //   this.playIndefinitely();
    })
        
    }
    
    private $onChanges():void{

        this.style = {
            width:this.width+'px',
            height:this.height+'px',
            color:this.color
        };

      //  this.playIndefinitely();


        
        

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

    // playIndefinitely():void		
	// {
	// 	angular.element(this.element.find('div'))[0].animate(
	// 	{
	// 		top: this.getRandomValue(100)-5+ '%',
	// 		left: this.getRandomValue(100)-5 + '%',
	// 	},8000+this.getRandomValue(6000),function(){
    //         this.scope.emit(SparkController.EVENT);
	// 	});
	// }
    
}