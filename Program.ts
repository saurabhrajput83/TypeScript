import {ICalcultor} from './Interfaces/ICalculator';
import {Calculator} from './Classes/Calculator';

class Program{

    static  main():void{

        var num1:number=9;
        var num2:number=7;
        var output:number=7;

        var calc:ICalcultor = new Calculator();

        output = calc.add(num1, num2);
        console.log("add:: "+output);

        output = calc.sub(num1, num2);
        console.log("sub:: "+output);

        output = calc.mul(num1, num2);
        console.log("mul:: "+output);

        output = calc.div(num1, num2);
        console.log("div:: "+output);
    };
};

Program.main();