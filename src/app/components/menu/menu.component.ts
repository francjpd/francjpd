/// <reference types="angular"/>
/// <reference types="angular-ui-router" />

class MenuBinding {
   items:string; 

   constructor(){
       this.items = '<';
   }

   static getInstance():MenuBinding {
        return new MenuBinding();
   }
}

export interface MenuItem {
	text:string;
    url: string;
    icon:string;
}

let template = require('ngTemplate!html!./menu.html');

export default class MenuComponent implements ng.IComponentOptions{
    
    templateUrl:any;
    bindings:any

    
    constructor(){
        this.templateUrl = template;
        this.bindings = MenuBinding.getInstance();
        
    }

    static getInstance():ng.IComponentOptions{
        return new MenuComponent();
    }


}