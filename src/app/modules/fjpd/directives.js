angular.module('cv.fjpd.directives')
.directive('cvSkills',function(){
	function createRating(scope,element,rating,name)
	{
		var div = angular.element('<div>');
		div.addClass('skills');

		var row = angular.element('<div>');
		row.addClass('row');
		div.append(row);

		var ratingCol = angular.element('<div>');
		ratingCol.addClass('col-lg-2');
		row.append(ratingCol);

		var halfStar = false;
		if(rating.indexOf('.5')>0)
		{
			halfStar = true;
			rating  = rating.split('.')[0];
		}
		
		for(var i=0;i<rating;i++)
		{
			var ratingIcon = angular.element('i');
			ratingIcon.addClass('fa fa-star fa-lg');
			ratingCol.append(ratingIcon);
		}

		if(halfStar)
		{
			ratingIcon = angular.element('i');
			ratingIcon.addCLass('fa fa-star-half-o fa-lg');
			ratingCol.append(ratingIcon);
		}


		var nameDiv = angular.element('div');
		nameDiv.addClass('col-lg-4 col-lg-push-4');
		row.append(nameDiv);

		return div;

	}
	return{
			restrict:'E',
			link:function(scope,element, attrs)
			{
				var rating = attrs['rating'];
				var name = attrs['name'];

				var div = createRating(scope,element,rating,name); 
				//element.append(div);
			}
		}

});
