
import {ICalcultor} from './Interfaces/ICalculator';
import {IAnimal} from './Interfaces/IAnimal';
import {Calculator} from './Classes/Calculator';
import {Animal, Lion, Cow} from './Classes/Animal';
import {Main} from './Namespaces/Main';

class Program{

    static  main():void{

        var num1:number=9;
        var num2:number=7;
        var num3:number=5;
        var num4:number=3;
        var output:number;

        var calc:ICalcultor = new Calculator();

        output = calc.add(num1, num2);
        console.log("add:: "+output);
        output = calc.add(num1,num2, num3);
        console.log("add:: "+output);
        output = calc.add(num1,num2, num3, num4);
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

        Main.greet();

        var obj:Main.IUtilities = new Main.Utilities();
        obj.greet();

    };


};

Program.main();