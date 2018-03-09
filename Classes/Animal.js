"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name, food, sound) {
        this._name = name;
        this._food = food;
        this._sound = sound;
    }
    ;
    Animal.prototype.greet = function () {
        console.log("Hello i am " + this._name);
    };
    ;
    Animal.prototype.eat = function () {
        console.log(this._name + " eating " + this._food);
    };
    ;
    Animal.prototype.makeSound = function () {
        console.log(this._name + " doing " + this._sound);
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
;
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        return _super.call(this, "Cow", "Grass", "Moo") || this;
    }
    ;
    return Cow;
}(Animal));
exports.Cow = Cow;
;
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super.call(this, "Lion", "Flesh", "Roar") || this;
    }
    ;
    return Lion;
}(Animal));
exports.Lion = Lion;
;
