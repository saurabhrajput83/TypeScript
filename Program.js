"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Classes/Calculator");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function () {
        var num1 = 9;
        var num2 = 7;
        var output = 7;
        var calc = new Calculator_1.Calculator();
        output = calc.add(num1, num2);
        console.log("add:: " + output);
        output = calc.sub(num1, num2);
        console.log("sub:: " + output);
        output = calc.mul(num1, num2);
        console.log("mul:: " + output);
        output = calc.div(num1, num2);
        console.log("div:: " + output);
    };
    ;
    return Program;
}());
;
Program.main();
