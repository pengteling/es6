'use strict';

// import Tab from "./tab"

// window.onload =function(){
// 	new Tab("tab");
// }

// var p1 = new Promise(function(resolve,reject){

// })
// Promise.reject("wrong").then(function(){},function(res){
// 	console.log(res);
// })

// Promise.resolve(2).then(function(val){
// 	console.log(val);
// })
/*import "babel-polyfill"; //

function* show(){
	yield console.log('hello');
	yield console.log('world');	
}
var res =show();
res.next();
res.next();*/
/*import "babel-polyfill"; 
var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}*/

import "babel-polyfill"; 
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve();
            reject("test");
        }, time);
    })
};

var start = async function () {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();