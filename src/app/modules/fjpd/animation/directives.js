angular.module('cv.fjpd.animation.directives')
.directive('cvFloating',['$interval',function($interval){



	var startFloating = function(element,context){
		
		function switchClasses(/*String*/firstClass,/*String*/secondClass){
		
			element.switchClass(firstClass,secondClass,
				{
					duration:10000,
					queue:true,
					complete:function(){
				console.log('entered Once'+ firstClass);
				switchClasses(secondClass,firstClass)
			}
		});

		};
			switchClasses('cv-floating-out','cv-floating-in');

	};
	return {
		restrict: 'EA',
		link:function(scope,element,attrs){

		startFloating(element,scope);
		}
	}
}]);
