
import {IAnimal} from './../Interfaces/IAnimal';
import {AnimalType} from './../Enums/Enums';

export class Animal implements IAnimal{

    private _name:string;
    private _food:string;
    private _sound:string;
    private _type:AnimalType;

    constructor(name:string, food:string, sound:string, type:AnimalType){
        this._name= name;
        this._food=food;
        this._sound=sound;
        this._type=type;
    };

    greet():void{
        console.log("Hello i am "+this._name+" and i am a "+(<AnimalType>this._type).toString());
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
        super("Cow", "Grass", "Moo", AnimalType.Harbivorous);
    };

};

export class Lion extends Animal {

    constructor(){
        super("Lion", "Flesh", "Roar", AnimalType.Carnivorous);
    };

};
