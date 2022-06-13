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
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        return "Target : The defalult's behavior.";
    };
    return Target;
}());
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return ".eetpadA eht fo roivaheb laicepS";
    };
    return Adaptee;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function () {
        var result = this.adaptee.specificRequest().split("").reverse().join("");
        return "Adapter: (Translated) " + result;
    };
    return Adapter;
}(Target));
function clientCode(target) {
    console.log(target.request());
}
console.log("Client: I can work just fine with the Target objects:");
var target = new Target();
clientCode(target);
console.log("");
var adaptee = new Adaptee();
console.log("Client : The Adaptee class has a weird interface. See, I don't understand it:");
console.log("Adaptee : " + adaptee.specificRequest());
console.log("");
console.log("Client : But I can work with it via the Adapter:");
var adapter = new Adapter(adaptee);
clientCode(adapter);
