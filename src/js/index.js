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
// const queuedObservers = new Set();

// const observe = fn => queuedObservers.add(fn);
// const observable = obj => new Proxy(obj, {set});

// function set(target, key, value, receiver) {
//   const result = Reflect.set(target, key, value, receiver);
//   queuedObservers.forEach(observer => observer());
//   return result;
// }
// const person = observable({
//   name: '张三',
//   age: 20
// });

// function print() {
//   console.log(`${person.name}, ${person.age}`)
// }
// function sb(){
// 	console.log(`${person.prototype }`);
// }

// observe(print);
// observe(sb);
// person.name = '李四';
// person.name = 'ptl';

class person{	
	fn(n){
		console.log(n+this.name+this.age);
	}
}

let p1 =new person();
p1.name="ptl";
p1.age=23;
p1.fn("test");