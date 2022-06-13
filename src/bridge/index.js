var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abstraction = /** @class */ (function () {
    function Abstraction(implementation) {
        this.implementation = implementation;
    }
    Abstraction.prototype.operation = function () {
        var result = this.implementation.operationInplementation();
        return "Abstraction: Base operation with: \n".concat(result);
    };
    return Abstraction;
}());
var ExtendedAbstraction = /** @class */ (function (_super) {
    __extends(ExtendedAbstraction, _super);
    function ExtendedAbstraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedAbstraction.prototype.operation = function () {
        var result = this.implementation.operationInplementation();
        return "ExtendedAbstraction : Extended operation with \n".concat(result);
    };
    return ExtendedAbstraction;
}(Abstraction));
var ConcreteImplementationA = /** @class */ (function () {
    function ConcreteImplementationA() {
    }
    ConcreteImplementationA.prototype.operationInplementation = function () {
        return "ConcreteImplementationA: Here's the result on the platform A.";
    };
    return ConcreteImplementationA;
}());
var ConcreteImplementationB = /** @class */ (function () {
    function ConcreteImplementationB() {
    }
    ConcreteImplementationB.prototype.operationInplementation = function () {
        return "ConcreteImplementationB: Here's the result on the platform B.";
    };
    return ConcreteImplementationB;
}());
function clientCode(abstraction) {
    console.log(abstraction.operation());
}
var implementation = new ConcreteImplementationA();
var abstraction = new Abstraction(implementation);
clientCode(abstraction);
console.log("");
implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);
