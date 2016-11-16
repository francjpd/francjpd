/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>



import appState from "./app.state";

export default function AppConfig($stateProvider: ng.ui.IStateProvider  ){

        $stateProvider
            .state('app',appState.getInstance());

            

}