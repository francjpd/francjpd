/// <reference types="angular" />
/// <reference types="angular-ui-router" />

import appComponent from './app.component'; 


export default class AppState implements angular.ui.IState {

        url:string ='/app';
        component:string  ='app';
        
        static getInstance():angular.ui.IState{
            return new AppState();
        }
}