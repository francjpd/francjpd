/// <reference types="angular" />
/// <reference types="@types/angular-ui-router" />

import appComponent from './app.component'; 

export default class AppState implements angular.ui.IState {

        url:string ='/';
        component:string = appComponent.NAME;
        constructor(){
            console.log(this);
            
        }

        
        static getInstance():angular.ui.IState{
            return new AppState();
        }
}