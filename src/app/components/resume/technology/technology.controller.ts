///<reference types="angular"/>


interface ItechnologyComponentController  extends ng.IComponentController {
	doSomething():string;
	
}
export default class TechnologyCtrl implements ItechnologyComponentController{
    static $inject :string[] = ['$rootScope'];

    constructor(private $rootScope:ng.IScope){
        
    }

    $onInit(){
        console.log('Need to modify technologyController $rootScope', this.$rootScope)
    }

    doSomething():string{
        return 'something';
    }
}