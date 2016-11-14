/// <reference types="angular" />
/// <reference types="angular-ui-router" />

import appComponent from './app.component'; 

let template:any = require('ngTemplate!html!./app.html');


export default class AppState implements angular.ui.IState {

        template = '<app></app>';
        url:string ='/';
        component:string  ='app';

        constructor(){
        }

        
        static getInstance():angular.ui.IState{
            return new AppState();
        }
}