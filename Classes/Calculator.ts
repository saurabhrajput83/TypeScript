
import {ICalcultor} from './../Interfaces/ICalculator';

export class Calculator implements ICalcultor{

    constructor(){
        
    };

    add(num1:number, num2:number):number;
    add(num1:number, num2:number, num3:number):number;
    add(num1:number, num2:number, num3:number, num4:number):number;
    add(num1:number, num2:number, num3?:number, num4?:number):number{
        var output:number =  num1+num2;

        if(num3){
            output+=num3;
        }
        if(num4){
            output+=num4;
        }

        return output;
    };

    sub(num1:number, num2:number):number{
        return num1-num2;
    };

    mul(num1:number, num2:number):number{
        return num1*num2;
    };

    div(num1:number, num2:number):number{
        return num1/num2;
    };

}