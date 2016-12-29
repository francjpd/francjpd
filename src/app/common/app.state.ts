/// <reference types="angular" />
/// <reference types="@types/angular-ui-router" />

import appComponent from './app.component'; 

export default class AppState implements angular.ui.IState {

        url:string;
        component:string;
        name:string;

        constructor(){
            this.url ='/';
            this.name = 'app';
            this.component = appComponent.NAME;   
        }

        
        static getInstance():angular.ui.IState{
            return new AppState();
        }
}