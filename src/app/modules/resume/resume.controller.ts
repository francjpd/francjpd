export default class ResumeCtrl{
	constructor($scope:any,datastoreApi:any){
		

	var _details:any = new Object();
	var _key : String = "";
	var _projectsViews : any = [];
	var _fullyLoaded : boolean = false;


	for(var i=0;i<getDetails().length;i++)
	{	
		//key = getDetails()[i].company;
		//details[key] = false;
	}

	// Getter from details
	$scope.getDetails = getDetails;

	// Obtain experience from experience.json
	$scope.getExperience = getExperience;

	// Hide/show details 
	$scope.toggleDetails = toggleDetails;
	
	//I do not need to do any logic on here so i leave it without function
	$scope.getAboutMe = datastoreApi.getAboutMe();

	$scope.getProjectView = getProjectView;

	

	function getDetails()
	{
		return _details;
	};

	function getExperience()
	{
		var experience = datastoreApi.getExperience();
		
		if(_projectsViews.length<=0)
		{

			for(var i=0;i<experience.length;i++)
			{
				
				_projectsViews.push(false);
			}
		}
		return experience;

	};

	function toggleDetails(index:number)
	{

		if(_projectsViews[index] == false)
		{
			_projectsViews[index] = true;
			
		}
		else
		{
			_projectsViews[index] = false;
			
		}

		//dont need this
		return {
				index:index,
				active:_projectsViews[index]
				};
	};


	function getProjectView()
	{
		
		return _projectsViews
	}

	function getProjectViewById(index:number)
	{
		//return _projectViews[index];
	}

	$scope.getTechnolgyFilters  =  datastoreApi.getTechnologyFilter();


	$scope.changeLabel = changeLabel;




	function changeLabel(index:number)
	{
		
		var possiblyFilters = datastoreApi.getTechnologyFilter()
	
		$scope.selectedTechnology;

	};


	function getTechnologyFilter(){

		datastoreApi.getTechnologyFilter();
	}



	}
}
