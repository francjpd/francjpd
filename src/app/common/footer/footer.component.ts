/// <reference types="angular" />

let template:any = require('ngTemplate!html!./footer.html');

export default class FooterComponent implements ng.IComponentOptions{
    public templateUrl:any = template;

    static $inject:Array<string> = [''];
    constructor(){}
    
    static getInstance(): ng.IComponentOptions{
        return new FooterComponent();
    }
}