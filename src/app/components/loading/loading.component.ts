/// <reference types="angular"/>

import angular = require('angular');

import LoadingCtrl from './loading.controller';

let template = require('ngtemplate!html!./loading.template.html');

class LoadingBindings {
    private static instance:LoadingBindings;
    isLoading:string;
    constructor(){
        this.isLoading = '<';
    }
    static getInstance():LoadingBindings{
        if(!angular.isDefined(this.instance)){
            this.instance = new LoadingBindings();
        }
        return this.instance;
    }

}
export default class LoadingComponent implements ng.IComponentOptions{

    static NAME:string = 'loading';

    static getInstance():LoadingComponent{
        return new LoadingComponent();
    }
    
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= LoadingCtrl;
        this.bindings = LoadingBindings.getInstance();
    }


}