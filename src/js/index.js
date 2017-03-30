'use strict';
function *g1(){
	console.log("Hello");
	yield 'Yield 1 Ran..';
	console.log("world");
	yield 'Yield 2 Ran..';
	return "over";
}
var g=g1();
console.log(g.next());
console.log(g.next());
console.log(g.next());

//
// // var myPromise = Promise.resolve('Foo');
// // myPromise.then((res)=> console.log(res));
//
// // var myPromise = new Promise(function(resolve,reject) {
// // 	console.log("begin");
// // 	reject(41);
// // 	setTimeout(() => resolve(4),2000);
// // });
// // myPromise.then((res) => {
// // 	res +=3 ;
// // 	console.log(res);
// // }).catch(function(err) {
// // 	console.log("wrong:"+err)	;
// // })
//
// function getData(method,url){
// 	return new Promise(function(resolve,reject){
// 		var xhr = new XMLHttpRequest();
// 		xhr.open(method,url);
// 		xhr.onload = function(){
// 			if(this.status>=200 && this.status<300){
// 				resolve(xhr.response);
// 			}else{
// 				reject({
// 					status:this.status,
// 					statusText:xhr.statusText
// 				})
// 			}
// 		};
// 		xhr.send();
// 	})
// }
// //getData('get','data.json').then(function(data){
// getData('get','http://jsonplaceholder.typicode.com/todos').then(function(data){
// //getData('get','http://jz.u8see.com/account/1/getfriend/').then(function(data){
// 	//console.log(data);
// 	let todos = JSON.parse(data);
// 	let output ='';
// 	for(let todo of todos){
// 		output += `
// 			<div>
// 				<h3>${todo.title}</h3>
// 				<p>${todo.completed}</p>
// 			</div>
// 		`
// 	}
// 	document.body.innerHTML = output;
// }).catch(function(err){
// 	console.log(err);
// })
// // import Tab from "./tab"
//
//
// // window.onload =function(){
// // 	new Tab("tab");
// // }
//
// // var p1 = new Promise(function(resolve,reject){
//
// // })
// // Promise.reject("wrong").then(function(){},function(res){
// // 	console.log(res);
// // })
//
// // Promise.resolve(2).then(function(val){
// // 	console.log(val);
// // })
// // import "babel-polyfill"; //
// //
// // function* show(){
// // 	yield console.log('hello');
// // 	yield console.log('world');
// // }
// // var res =show();
// // res.next();
// // res.next();
// /*import "babel-polyfill";
// var fibonacci = {
//   [Symbol.iterator]: function*() {
//     var pre = 0, cur = 1;
//     for (;;) {
//       var temp = pre;
//       pre = cur;
//       cur += temp;
//       yield cur;
//     }
//   }
// }
//
// for (var n of fibonacci) {
//   // truncate the sequence at 1000
//   if (n > 1000)
//     break;
//   console.log(n);
// }*/
//
// // import "babel-polyfill";
// // var sleep = function (time) {
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             //resolve();
// //             reject("test");
// //         }, time);
// //     })
// // };
//
// // var start = async function () {
// //     // 在这里使用起来就像同步代码那样直观
// //     console.log('start');
// //     await sleep(3000);
// //     console.log('end');
// // };
//
// // start();
// //import "babel-polyfill";
// /*function classroom(roomName){
// 	return function(target){
// 		target.study=function(){
// 			console.log("在"+roomName);
// 		}
// 	}
// }
// @classroom("room3")
// class Student{}
// console.log(Student);
// Student.study()*/
//
// /*function testable(target) {
//   target.isTestable = true;
// }
//
// @testable
// class MyTestableClass {}
// console.log(MyTestableClass.isTestable) // true*/
