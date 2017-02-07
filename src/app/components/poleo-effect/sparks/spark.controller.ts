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
//	playIndefinitely():void;
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
        this.playIndefinitely();
    })
        
    }
    
    private $onChanges():void{
        this.style = {
            fontSize:this.height+'px',
            color:this.color,
            opacity:(200-this.height)/100
          
            
        };

        this.playIndefinitely();


        
        

    }

	private getRandomValue(maxNumber:number=100):number
	{
		var result = 0 ;

        result = Math.ceil(Math.random()*maxNumber);
      
		return result;
	};

    playIndefinitely():void		
	{   

        angular.element(this.element).find('div').animate(
		{
			top: this.getRandomValue()-5+ '%',
			left: this.getRandomValue()-5 + '%',
		},1000+this.getRandomValue(8000),angular.bind(this,function(){
            this.scope.$emit(SparkController.EVENT);
        }));
	}
    
}