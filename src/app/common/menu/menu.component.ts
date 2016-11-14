/// <reference types="angular"/>
/// <reference types="angular-ui-router" />

interface MenuBinding {
    
}

interface MenuItem {
	text:string;
    url: string;
}

let template = require('ngTemplate!html!./menu.html');

export default class MenuComponent implements ng.IComponentOptions{
    
    templateUrl:any = template;
    
    bindings:any = {
        menuItems : '=?'
    }
    
    constructor(){
        console.log('menu');
        
    }

    static getInstance():ng.IComponentOptions{
        return new MenuComponent();
    }


}