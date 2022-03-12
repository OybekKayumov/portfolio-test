"use strict";
function _typeof(obj1) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o1, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o1, p1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o2);
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
var Car = /*#__PURE__*/ function() {
    function Car1(make, speed) {
        _classCallCheck(this, Car1);
        this.make = make;
        this.speed = speed;
    }
    _createClass(Car1, [
        {
            key: "accelerate",
            value: function accelerate() {
                this.speed += 10;
                console.log("".concat(this.make, " is going at ").concat(this.speed, " km/h"));
            }
        },
        {
            key: "brake",
            value: function brake() {
                this.speed -= 5;
                console.log("".concat(this.make, " is going at ").concat(this.speed, " km/h"));
                return this;
            }
        },
        {
            key: "speedUS",
            get: function get() {
                return this.speed / 1.6;
            },
            set: function set(speed) {
                this.speed = speed * 1.6;
            }
        }
    ]);
    return Car1;
}();
var _charge = /*#__PURE__*/ new WeakMap();
var EVclass = /*#__PURE__*/ function(_Car) {
    _inherits(EVclass1, _Car);
    var _super = _createSuper(EVclass1);
    function EVclass1(make, speed, charge) {
        var _this;
        _classCallCheck(this, EVclass1);
        _this = _super.call(this, make, speed); // from paren Class
        _classPrivateFieldInitSpec(_assertThisInitialized(_this), _charge, {
            writable: true,
            value: void 0
        });
        _classPrivateFieldSet(_assertThisInitialized(_this), _charge, charge);
        return _this;
    }
    _createClass(EVclass1, [
        {
            key: "chargeBattery",
            value: function chargeBattery(chargeTo) {
                _classPrivateFieldSet(this, _charge, chargeTo);
                return this;
            }
        },
        {
            key: "accelerate",
            value: function accelerate() {
                var _this$charge;
                this.speed += 20;
                _classPrivateFieldSet(this, _charge, (_this$charge = +_classPrivateFieldGet(this, _charge)) - 1);
                console.log("".concat(this.make, " is going at ").concat(this.speed, " km/h, with a charge of ").concat(_classPrivateFieldGet(this, _charge)));
                return this;
            }
        }
    ]);
    return EVclass1;
}(Car);
var rivian = new EVclass('Rivian', 120, 23);
console.log('rivian: ', rivian); // rivian:  EVclass {make: 'Rivian', speed: 120, charge: 23}
//Rivian is going at 140 km/h, with a charge of 22
// console.log(rivian.#charge);  // SyntaxError 
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate(); // Rivian is going at 140 km/h, with a charge of 22
// Rivian is going at 160 km/h, with a charge of 21
// Rivian is going at 180 km/h, with a charge of 20
// Rivian is going at 175 km/h
// Rivian is going at 195 km/h, with a charge of 49
console.log(rivian.speedUS); // 121.875

//# sourceMappingURL=index14.c048eb59.js.map
