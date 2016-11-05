angular.module('cv.datastore.service')
.service('datastoreApi',function(){
		

		var _experience = experience;
		var _filters = technologyFilter;
		var _about = aboutMe;

		this.getTechnologyFilter = function(){
				
				return _filters;
			};

		this.getExperience = function(){
				return _experience;
			};

		this.getAboutMe = function(){
				return _about;
			};
		});

