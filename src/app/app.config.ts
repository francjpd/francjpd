/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>

export default function AppConfig($urlRouterProvider:angular.ui.IUrlRouterProvider ){

    

        $urlRouterProvider.otherwise('/');
            
}