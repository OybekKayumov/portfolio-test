"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var imgContainer = document.querySelector('.images');
var wait = function wait(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
var createImg = function createImg(imgPath) {
    return new Promise(function(resolve, reject) {
        var img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function() {
            reject(new Error('Image not found!!!'));
        });
    });
};
var currImg; // createImg('img/img-1.jpg')
//   .then(img => {
//     currImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//     return createImg('img/img-2.jpg');
//   })
//   .then(img => {
//     currImg = img;
//     console.log('Image 2 loaded');
//     return wait(2)
//   })
//   .then(() => {
//     currImg.style.display = 'none';
//   })
//   .catch(err => console.error('err: ', err))
// PART 1
var LoadNPause = /*#__PURE__*/ function() {
    var _ref = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var img;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return createImg('img/img-1.jpg');
                case 3:
                    img = _context.sent;
                    console.log('Image 1 loaded');
                    _context.next = 7;
                    return wait(2);
                case 7:
                    img.style.display = 'none'; // Load img 2
                    _context.next = 10;
                    return createImg('img/img-2.jpg');
                case 10:
                    img = _context.sent;
                    console.log('Image 2 loaded');
                    _context.next = 14;
                    return wait(2);
                case 14:
                    img.style.display = 'none';
                    _context.next = 20;
                    break;
                case 17:
                    _context.prev = 17;
                    _context.t0 = _context["catch"](0);
                    console.error('err: ', _context.t0);
                case 20:
                case "end":
                    return _context.stop();
            }
        }, _callee, null, [
            [
                0,
                17
            ]
        ]);
    }));
    return function LoadNPause() {
        return _ref.apply(this, arguments);
    };
}(); // LoadNPause();
// PART 2
var loadAll = /*#__PURE__*/ function() {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee3(imgArr) {
        var imgs, imgsEl;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while(true)switch(_context3.prev = _context3.next){
                case 0:
                    _context3.prev = 0;
                    imgs = imgArr.map(/*#__PURE__*/ function() {
                        var _ref3 = _asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee2(img) {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while(true)switch(_context2.prev = _context2.next){
                                    case 0:
                                        _context2.next = 2;
                                        return createImg(img);
                                    case 2:
                                        return _context2.abrupt("return", _context2.sent);
                                    case 3:
                                    case "end":
                                        return _context2.stop();
                                }
                            }, _callee2);
                        }));
                        return function(_x2) {
                            return _ref3.apply(this, arguments);
                        };
                    }());
                    console.log('imgs: ', imgs);
                    _context3.next = 5;
                    return Promise.all(imgs);
                case 5:
                    imgsEl = _context3.sent;
                    console.log('imgsEl: ', imgsEl);
                    imgsEl.forEach(function(img) {
                        return img.classList.add('parallel');
                    });
                    _context3.next = 13;
                    break;
                case 10:
                    _context3.prev = 10;
                    _context3.t0 = _context3["catch"](0);
                    console.log(_context3.t0);
                case 13:
                case "end":
                    return _context3.stop();
            }
        }, _callee3, null, [
            [
                0,
                10
            ]
        ]);
    }));
    return function loadAll(_x) {
        return _ref2.apply(this, arguments);
    };
}();
loadAll([
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg'
]); // imgs:  
 // Array(3)
 // 0: Promise {<fulfilled>: img}
 // 1: Promise {<fulfilled>: img}
 // 2: Promise {<fulfilled>: img}
 // length: 3
 // [[Prototype]]: Array(0)

//# sourceMappingURL=index.2da0b2f7.js.map
