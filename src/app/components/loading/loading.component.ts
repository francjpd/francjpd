/// <reference types="angular"/>

import LoadingCtrl from './loading.controller';

let template = require('ngtemplate!html!./loading.template.html');

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
    }


}