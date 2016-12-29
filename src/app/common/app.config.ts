/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>

import AppState from "./app.state";

export default function AppConfig($stateProvider: ng.ui.IStateProvider  ){

        $stateProvider
            .state(AppState.getInstance());
            
}