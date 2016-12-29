/// <reference types="angular"/>
/// <reference path="../../components/menu/menu.component.ts"/>

import {MenuItem} from "../../components/menu/menu.component"; 

export default class HeaderCtrl{
    sparkNumber:number;
    menuItems:Array<MenuItem>;
    public static $inject:Array<string> = ['$scope'];
    
    constructor($scope:any){
        this.menuItems = [
                            new MenuItem('myself','','', [
                                new MenuItem('experience','fa-signal',''),
                                new MenuItem('technology','fa-html5',''),
                                new MenuItem('studies','fa-graduation-cap','')

                            ]),
                            new MenuItem('blog','resume','resume'),
                            new MenuItem('library','','')
                         ];
        
        }

    private $onInit():void{
        this.sparkNumber = 10;
    }
}