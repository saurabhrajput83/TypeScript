
import {IAnimal} from './../Interfaces/IAnimal';

export class Animal implements IAnimal{

    private _name:string;
    private _food:string;
    private _sound:string;

    constructor(name:string, food:string, sound:string){
        this._name= name;
        this._food=food;
        this._sound=sound;
    };

    greet():void{
        console.log("Hello i am "+this._name);
    };

    eat():void{
        console.log(this._name + " eating "+this._food);
    };

    makeSound():void{
        console.log(this._name + " doing "+this._sound);
    };

};

export class Cow extends Animal {

    constructor(){
        super("Cow", "Grass", "Moo");
    };

};

export class Lion extends Animal {

    constructor(){
        super("Lion", "Flesh", "Roar");
    };

};
