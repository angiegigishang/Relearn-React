function add(x, y, z) {
    if (z === void 0) { z = 10; }
    if (typeof z === 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
}
var result = add(2, 3, 5);
var add2 = function (x, y, z) {
    if (z === void 0) { z = 10; }
    if (typeof z === 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
var add3 = add2;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// const value = 'UP'
// if (value === Direction.Up) {
//     console.log('go up!')
// }
function echo(arg) {
    return arg;
}
var str = 'str';
var results = echo(str);
var results1 = echo(123);
var results2 = echo(true);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var results3 = swap(['string', 123]);
results3[1].concat;
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var arrs = echoWithArr([1, 2, 3]);
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var strss = echoWithLength('str');
var obj = echoWithLength({ length: 10, width: 10 });
var arr2 = echoWithLength([1, 2, 3]);
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());
var queue2 = new Queue();
queue2.push('str');
console.log(queue2.pop().length);
var kp1 = { key: 1, value: 'str' };
var kp2 = { key: 'text', value: 23 };
var arr = [1, 2, 3];
var arrTwo = [1, 2, 3];
var arr1 = [1, 2, 3];
var arrTwo1 = [1, 2, 3];
function plus(a, b) {
    return a + b;
}
function connect(a, b) {
    return a + b;
}
var a = plus;
var b = connect;
function sum1(x, y) {
    return x + y;
}
var sum2 = sum1;
var sum3 = sum1;
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function getLength(input) {
    // const str = input as String
    // if (str.length) {
    //     return str.length
    // } else {
    //     const number = input as Number
    //     return number.toString().length
    // }
    if (input.length) {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
var a1 = [1, 2, 3];
var date = new Date();
date.getTime();
var reg = /abc/;
reg.test('abc');
Math.pow(2, 2);
//DOM and BOM
var body = document.body;
var allLis2 = document.querySelectorAll('li');
//allLis2.keys()
document.addEventListener('click', function (e) {
    e.preventDefault;
});
var viking = { name: 'viking', age: 20 };
var vking2 = { name: 'sdf' };
var viking3 = { age: 20 };
//global objects
var aa = [1, 2, 3];
var date2 = new Date();
date2.getTime();
var reg2 = /abc/;
reg.test('abc');
//build-in objects
Math.pow(2, 3);
//DOM and BOM
var body2 = document.body;
var allLis4 = document.querySelectorAll('li');
////allLis4.keys()
document.addEventListener('click', function (e) {
    e.preventDefault();
});
