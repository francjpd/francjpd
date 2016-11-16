/// <reference types="angular"/>

import angular = require('angular');

let template:any = require('!ngTemplate!html!./sparks.html');

interface IParticleConfig {
    container:HTMLElement;
    maxSize:number;
    minSize:number;
    color:string;
    width:number;
    height:number;
}

export default class SparksComponent implements ng.IComponentOptions {

    static NAME:string = "sparks"
    static getInstance():ng.IComponentOptions {
        return new SparksComponent();
    }
    static $inject:Array<string> = [];
    constructor(){}
    
    private createParticle(particleConfig:IParticleConfig):HTMLElement{
        var  particle:any = angular.element('<div>');

        particle.addClass('pe-particle');
        


        return particle
    } 






	var createParticle = function(container,maxSize,minSize,color,width,height)
	{

		//create container 
		var particle = angular.element('<div>');
		//create 'particle'

		particle.addClass('fjpd-particle ');
		particle.append('.');


		var fontSize = getRandomValue(maxSize,minSize);
		



		particle.css({
/*positioning*/'top':getRandomValue(height)-20,
			   'left':getRandomValue(width)-20,
/*depth*/	   'z-index':getRandomValue(50),
			   'position':'absolute',
/*properties*/ 'font-size':fontSize,
			   'color':color,
			   'opacity': Math.random()
					 });

		return particle;



	};

	var getRandomValue = function(max,min)
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
		else
		{
			$log.info('You must at least give max value.');
		}

		return result;

		
	};

	var play = function(particle,container,width,height)		
	{
		angular.element(particle).animate(
		{
			top: getRandomValue(height)-20,
			left: getRandomValue(width)-20,
		},8000+getRandomValue(6000),function(){
			play(particle,container,width,height);
		});
	}

	return{
		restrict:'E',
		link:function(scope,element,attrs){

			var number = attrs['number'];
			var attachToDocument = Boolean(attrs['attachtodocument']);
			var minSize = attrs['minsize'];
			var maxSize = attrs['maxsize'];
			var width = attrs['width'];
			var height = attrs['height'];
			var color = attrs['color'];
			var container = undefined; 
			var isDocumentParent = false;


			if(attachToDocument != undefined && attachToDocument == "true")
			{
			 	container	= angular.element(window);
			 	isDocumentParent = true;
			}
			else
			{
				container = element.parent();
			}
			//If width & height are null
			if(width == undefined || width < 0 )
			{
				width = container.width();
			}

			if(height == undefined || height <0)
			{
				height = container.height();
			}

			for(var i =0;i<number;i++)
			{
				var particle  = createParticle(container,maxSize,minSize,color,width,height);
				play(particle,container,width,height);
				if(isDocumentParent)
				{
					angular.element('body').append(particle);
				}
				else
				{
					container.append(particle);
				}
				

			}
		}
	}

}