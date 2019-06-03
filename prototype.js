// 1、第一个对象
Object.prototype
// 可以理解为 Object 与 Object.prototype是两个独立的对象，prototype是一个对象的引用，挂载在Object对象之上
// Object，Function即是函数又是对象，所有的函数都是函数又是对象
var Obect = function() {};

Object.prototype = {
  constructor: Object,
  __proto__: null,
  hasOwnProperty: function() {},
  isPrototypeOf: function() {},
  propertyIsEnumerable: function() {},
  toLocaleString: function() {},
  toString: function() {},
  valueOf: function() {},
};

// Object.prototype 是所有对象的直接原型，函数除外，即通过new Obect() 或 var obj = {}定义的对象
// 以及任何函数的原型对象，Function.prototype, Array.prototype, (new Function()).prototype.__proto__ === Object.prototype 为true


// 2、第二个对象
Function.prototype

// Function.prototype 是一切函数的原型，一切函数的__proto__指向Function.prototype
function Function() {}
function Object() {}


Function.__proto__ = Function.prototype;
Object.__proto__ = Function.prototype;
(new Function()).__proto__ = Function.prototype;

Function.prototype = {
  __proto__: Object.prototype,
};

// Function.prototype为一切函数的原型
