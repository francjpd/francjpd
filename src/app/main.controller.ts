/// <reference types='angular' />
/// <reference types='angular-ui-router'/>

export default class MainCtrl implements ng.IComponentController {
    
    static $inject:Array<string> = ['$scope'];
    constructor($scope:ng.IScope){
        $scope.$on('$stateChangeSucess',(event:ng.IAngularEvent,toState:ng.ui.IState)=>{
            console.log(toState);
        });
    }
}