///<reference types="angular"/>


export default class ResumeCtrl implements ng.IComponentController{
    constructor(){
        
    }
    public static getInstance():ResumeCtrl{
        return new ResumeCtrl();
    }
}