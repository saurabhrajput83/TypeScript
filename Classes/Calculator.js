"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    ;
    Calculator.prototype.add = function (num1, num2, num3, num4) {
        var output = num1 + num2;
        if (num3) {
            output += num3;
        }
        if (num4) {
            output += num4;
        }
        return output;
    };
    ;
    Calculator.prototype.sub = function (num1, num2) {
        return num1 - num2;
    };
    ;
    Calculator.prototype.mul = function (num1, num2) {
        return num1 * num2;
    };
    ;
    Calculator.prototype.div = function (num1, num2) {
        return num1 / num2;
    };
    ;
    return Calculator;
}());
exports.Calculator = Calculator;
