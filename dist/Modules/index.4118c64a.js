"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var budget = [
    {
        value: 250,
        description: 'Sold old TV 📺',
        user: 'jonas'
    },
    {
        value: -45,
        description: 'Groceries 🥑',
        user: 'jonas'
    },
    {
        value: 3500,
        description: 'Monthly salary 👩‍💻',
        user: 'jonas'
    },
    {
        value: 300,
        description: 'Freelancing 👩‍💻',
        user: 'jonas'
    },
    {
        value: -1100,
        description: 'New iPhone 📱',
        user: 'jonas'
    },
    {
        value: -20,
        description: 'Candy 🍭',
        user: 'matilda'
    },
    {
        value: -125,
        description: 'Toys 🚂',
        user: 'matilda'
    },
    {
        value: -1800,
        description: 'New Laptop 💻',
        user: 'jonas'
    }
];
var limits = {
    jonas: 1500,
    matilda: 100
};
var add = function add(value, description, user) {
    if (!user) user = 'jonas';
    user = user.toLowerCase();
    var lim;
    if (limits[user]) lim = limits[user];
    else lim = 0;
    if (value <= lim) budget.push({
        value: -value,
        description: description,
        user: user
    });
};
add(10, 'Pizza 🍕');
add(100, 'Going to movies 🍿', 'Matilda');
add(200, 'Stuff', 'Jay');
console.log(budget);
var check = function check() {
    var _iterator = _createForOfIteratorHelper(budget), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var el = _step.value;
            var lim;
            if (limits[el.user]) lim = limits[el.user];
            else lim = 0;
            if (el.value < -lim) el.flag = 'limit';
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
};
check();
console.log(budget);
var bigExpenses = function bigExpenses(limit) {
    var output = '';
    var _iterator2 = _createForOfIteratorHelper(budget), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var el = _step2.value;
            if (el.value <= -limit) output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

//# sourceMappingURL=index.4118c64a.js.map
