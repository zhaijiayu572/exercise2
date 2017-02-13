// function Demo() {
//     this.aa = 'aa';
// }
// Demo.prototype.bb = 'bb';
// var demo = new Demo();
// console.log(demo.bb);
function Demo1(){
    this.aa = 'a';
}
Demo1.prototype.bb = 'cc';
function Demo2(){
    this.aa = "bb";
}
Demo2.prototype = new Demo1();
var demo2 = new Demo2();
console.log(demo2.aa);
var demo1 = new Demo1();
console.log(demo1.aa);
console.log(demo2.bb);