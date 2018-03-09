import {ICalcultor} from './../Interfaces/ICalculator';

export class Calculator implements ICalcultor{

    add(num1:number, num2:number):number{
        return num1+num2;
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