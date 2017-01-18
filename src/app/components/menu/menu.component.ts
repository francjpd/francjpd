/// <reference types="angular"/>
/// <reference types="angular-ui-router" />

import MenuCtrl from './menu.controller';

class MenuBinding {
   items:string; 

   constructor(){
       this.items = '<';
   }

   static getInstance():MenuBinding {
        return new MenuBinding();
   }
}

export class  MenuItem {
	text:string;
    url: string;
    icon:string;
    items:Array<MenuItem>;

    constructor(text:string,link:string,icon:string,menuItems:Array<MenuItem> = undefined){
        this.text = text;
        this.url = link;
        this.icon = icon;
        this.items = menuItems;
        
    }
}

let template = require('ngTemplate!html!./menu.html');

export default class MenuComponent implements ng.IComponentOptions{
    
    templateUrl:any;
    bindings:any;
    controller:any;

    
    constructor(){
        this.templateUrl = template;
        this.bindings = MenuBinding.getInstance();
        this.controller = MenuCtrl;
        
    }

  
    static getInstance():ng.IComponentOptions{
        return new MenuComponent();
    }


}
