/// <reference types="angular" />

let template:any  = require('ngTemplate!html!./header.html');

 export default class HeaderComponent  implements ng.IComponentOptions{
     public templateUrl:any = template;

     static $inject:Array<string> = [''];
     constructor(){}


     static getInstance(): ng.IComponentOptions{
         return new HeaderComponent();
     }
    
     
 }   
   
        
        
    
