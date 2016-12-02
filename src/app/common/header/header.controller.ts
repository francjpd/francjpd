/// <reference types="angular"/>
/// <reference path="../components/menu/menu.component"/>

export default class HeaderCtrl{
    sparkNumber:number;
    menuItems:Menu
    public static $inject:Array<string> = ['$scope'];
    
    constructor($scope:any){
        
    }

    private $onInit():void{
        this.sparkNumber = 10;
    }
}