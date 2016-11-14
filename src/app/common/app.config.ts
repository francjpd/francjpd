/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>

import appState from "./app.state";

export default function AppConfig($stateProvider:angular.ui.IStateProvider){

        $stateProvider
            .state('app',appState.getInstance())
            .state('tuPutaMadre',{
                url:'/tu',
                component:'app'
        
            })
            

}