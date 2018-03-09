"use strict";
exports.__esModule = true;
var Main;
(function (Main) {
    ;
    var Utilities = /** @class */ (function () {
        function Utilities() {
        }
        Utilities.prototype.greet = function () {
            console.log("Welcome to sub Main !!!!");
        };
        return Utilities;
    }());
    Main.Utilities = Utilities;
    ;
    function greet() {
        console.log("Welcome to super Main !!!!");
    }
    Main.greet = greet;
})(Main = exports.Main || (exports.Main = {}));
