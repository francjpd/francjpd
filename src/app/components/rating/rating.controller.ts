///<reference types="angular"/>


interface IratingComponentController  extends ng.IComponentController {
	doSomething():string;
	
}
export default class RatingCtrl implements IratingComponentController{
    static $inject :string[] = ['$rootScope'];

    value:number;
    integerPart:number;
    hasHalf:boolean;
    empty:number;
    totalInt:Array<any>;
    total:Array<any>;

    constructor(private $rootScope:ng.IScope){
        
    }

    $onInit(){
        
     let splittedNumber:string[] =  this.value.toString().split('.');
     this.integerPart = parseInt(splittedNumber[0]);
     this.empty = 5 - this.integerPart;
     if(splittedNumber.length>1)
     {
         this.hasHalf = true;
         this.total = this.createIteration(this.empty -1);
     }
     else{
          this.total =this.createIteration(this.empty);
     }


     /**TODO 
      *  CHANGE THIS 
      */

     this.totalInt = this.createIteration(this.integerPart);
     
      // needs to switch to another solution, it sucks :)
    }

    doSomething():string{
        return null;
    }

    createIteration(number):Array<any>{
       let result = [];
       for(var i:number = 0; i< number; i++){
           result.push({id:(new Date().getTime() + i)});
       }
       return result;
    }
}