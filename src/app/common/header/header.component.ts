/// <reference types="angular" />

import headerCtrl from './header.controller';
let template:any = require('ngTemplate!html!./header.html');

 export default class HeaderComponent  implements ng.IComponentOptions{
    templateUrl:any;
     controller:any;

     static $inject:Array<string> = [''];
     constructor(){
         this.templateUrl = template;
         this.controller = headerCtrl ;
     }


     static getInstance(): ng.IComponentOptions{
         return new HeaderComponent();
     }
    
     
 }   
   
        
        
    
