///<reference types="angular"/>

import Knowledge from '../../../common/model/knowledge';

interface ItechnologyComponentController  extends ng.IComponentController {
	doSomething():string;
	
}
export default class TechnologyCtrl implements ItechnologyComponentController{
    
    knowledge:Knowledge[];
    frontend:Knowledge[];
    backend:Knowledge[];
    framework:Knowledge[];

    static $inject :string[] = ['$rootScope'];

    constructor(private $rootScope:ng.IScope){
        this.frontend = [];
        this.backend = [];
        this.framework = [];
    }

    $onInit(){
      
        this.knowledge.forEach(element => {
            if(element.type === 'frontend'){
                this.frontend.push(element);
            }else if(element.type === 'backend'){
                this.backend.push(element);
            }else if(element.type === 'framework'){
                this.framework.push(element);
            }
            
        });
        
    }

    doSomething():string{
        return 'something';
    }
}