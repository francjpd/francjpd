///<reference types="angular"/>


export default class LoadingCtrl implements ng.IComponentController{
    loading:boolean;
    constructor(){
        
    }
    public static getInstance():LoadingCtrl{
        return new LoadingCtrl();
    }
    $onInit():void{
        console.log(this.loading);
    }
}