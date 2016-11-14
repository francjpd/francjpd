/// <reference types='angular' />
/// <reference types='angular-ui-router'/>

export default function MainConfig(
            $urlRouterProvider:angular.ui.IUrlRouterProvider
            ){
    
    $urlRouterProvider.otherwise('/');
}