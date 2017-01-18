///<reference types="angular"/>


export default class LoadingCtrl implements ng.IComponentController{
    constructor(){
        
    }
    public static getInstance():LoadingCtrl{
        return new LoadingCtrl();
    }
}