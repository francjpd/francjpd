/// <reference types="angular"/>

export default class HeaderCtrl{
    sparkNumber:number;
    public static $inject:Array<string> = ['$scope'];
    
    constructor($scope:any){
        
    }

    private $onInit():void{
        this.sparkNumber = 10;
    }
}