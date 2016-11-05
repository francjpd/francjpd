export default class MainCtrl {
    constructor($scope:any){
        $scope.$on('$stateChangeSucess', function(event:Event,toState:any){
            console.log(toState);
        });
    }
}