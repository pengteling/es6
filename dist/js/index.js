'use strict';

// var user ={
// 	full_name:function(){
// 		return this.fname+' '+this.lname;
// 	}
// };
// user.fname="Bob";
// user.lname="Wood";
// //var full_name=user.fname+' '+user.lname;
// console.log(user.full_name());

// var user=new Proxy({fname:"ptl"},{
// 	get:function(obj,prop){
// 		if(prop=='full_name'){
// 			return obj.fname+" "+obj.lname;
// 		}
// 	}
// })
// //user.fname="Bob";
// user.lname="Wood";
// console.log(user.full_name);

// var arr =[1,2,3,4];
// var s = new Set([1,2,3,3]);

// s.add(4);
// s.delete(1);
// console.log(s);
// console.log(s.has(5));

// var queuedObservers = new Set();

// var observe = function observe(fn) {
//   return queuedObservers.add(fn);
// };
// var observable = function observable(obj) {
//   return new Proxy(obj, { set: set });
// };

// function set(target, key, value, receiver) {
//   var result = Reflect.set(target, key, value, receiver);
//   queuedObservers.forEach(function (observer) {
//     return observer();
//   });
//   return result;
// }
// var person = observable({
//   name: '张三',
//   age: 20
// });

// function print() {
//   console.log(person.name + ', ' + person.age);
// }
// function sb() {
//   console.log('' + person.prototype);
// }

// observe(print);
// observe(sb);
// person.name = '李四';
// person.name = 'ptl';


let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);