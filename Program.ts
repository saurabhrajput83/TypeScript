
import {ICalcultor} from './Interfaces/ICalculator';
import {IAnimal} from './Interfaces/IAnimal';
import {Calculator} from './Classes/Calculator';
import {Animal, Lion, Cow} from './Classes/Animal';

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

        var objCow:IAnimal = new Cow();
        objCow.greet();
        objCow.eat();
        objCow.makeSound();

        var objLion:IAnimal = new Lion();
        objLion.greet();
        objLion.eat();
        objLion.makeSound();

    };


};

Program.main();