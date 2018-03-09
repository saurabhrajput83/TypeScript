
export namespace Main{

    export interface IUtilities{
        greet():void;
    };

    export class Utilities implements IUtilities{

        greet():void{
            console.log("Welcome to sub Main !!!!");
        }

    };

    export function greet():void{
        console.log("Welcome to super Main !!!!");
    }

}