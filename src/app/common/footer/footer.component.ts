/// <reference types="angular" />

let templateasd:any = require('ngTemplate!html!./footer.html');

export default class FooterComponent implements ng.IComponentOptions{
    public templateUrl:any = templateasd;

    static $inject:Array<string> = [''];
    constructor(){}
    
    static getInstance(): ng.IComponentOptions{
        return new FooterComponent();
    }
}