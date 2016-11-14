/// <reference types="angular" />
/// <reference types="angular-ui-router" />

import appComponent from './app.component'; 

//let template:any = require('ngTemplate!html!./app.html');


export default class AppState implements angular.ui.IState {

      //  templateUrl = template;
        url:string ='/';
        component:string = appComponent.NAME;
        constructor(){
            console.log(this);
            
        }

        
        static getInstance():angular.ui.IState{
            return new AppState();
        }
}