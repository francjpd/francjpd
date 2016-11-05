angular.module('cv.resume.directives')
.directive('cvIsActive',function(){

	return function(scope,element,attrs){

	var isActive = attrs['cvIsActive'];

	// var watcheFn = function(watchScope)
	// {
	// 	return watchScope.$eval('toggleDetails(company)');
	// }	


	scope.$watch('getProjectView()[$index]',function (newValue,oldValue,scope){
	//this is going to have the first child
	var child = $(element.children()[0]);

	if(scope.getProjectView()[isActive])
	{
		element.addClass('col-lg-12 col-md-12 ');
		element.removeClass('col-lg-4 col-md-6');
		child.addClass('col-lg-4 col-md-12');
		child.removeClass('col-lg-12');
		
	}
	else
	{
		element.removeClass('col-lg-12 col-md-12 ');
		element.addClass('col-lg-4 col-md-6');
		child.removeClass('col-lg-4 col-md-6');
		child.addClass('col-lg-12 col-md-12');
	}
	
		
	});
	}

});

