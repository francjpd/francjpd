angular.module('cv.resume.filters')
.filter('time',['$log',function($log){
		return function(value){
			if(angular.isDefined(value.until) 
			&& angular.isDefined(value.since))
			{
				var year = 1000 * 60 * 60 * (24*30)*12;
				var month = 1000 * 60 * 60 * (24*30);

				var utc2 = Date.UTC(value.until.getFullYear(),value.until.getMonth(),value.until.getDate());
				var utc1 = Date.UTC(value.since.getFullYear(),value.since.getMonth(),value.since.getDate());

				yearDiff =  Math.floor((utc2 - utc1) / year);
				monthDiff =  Math.floor((utc2 - utc1) / month+1);

				var result = ''; 

				if(yearDiff>0)
				{
					monthDiff =  value.until.getMonth() - value.since.getMonth()+1;
					result  = yearDiff+ ' year'
					if(yearDiff>1)
					{
						result+='s ';
					 
					}
					result += ' and '+ monthDiff + ' Month';	
					if(monthDiff>1)
					{
						result += 's ';
					}
				}
				else
				{
					monthDiff =  Math.floor((utc2 - utc1) / month+1);
					result =  monthDiff + ' Months';
				}
			
						
				return (result);
			}
		}
}]);

 