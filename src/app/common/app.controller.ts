/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>

export default class AppCtrl{
    sparkNumber:number;
    public static $inject:Array<string> = ['$scope','$state'];
    
    constructor($scope:any,$state:ng.ui.IStateService){
                
        $state.go('resume');
        
    }

    private $onInit():void{
      
    }
}