/// <reference types="angular" />

var templateUrl:any  = require('ngtemplate!html!./header.html');


 export default class HeaderComponent  implements ng.IComponentOptions{
     public templateUrl:string;

     constructor(){
        this.templateUrl = templateUrl;
     }

     static getInstance(): ng.IComponentOptions{
         return new HeaderComponent();
     }
    
     
 }   
   
        
        
    
