// function hello(){
//     console.log(this)
// }

// var hello = function(){
//     console.log(this)
// }

var hello = () => console.log(this);

var ob = {
  name: "samaradh",
};

//var fun1 = hello.bind(ob)
//fun1()

hello.call(ob);
