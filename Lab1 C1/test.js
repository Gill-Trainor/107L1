
var mathLib = require('./myMath');

/* function sayHello(){
    console.log("Hello, my name is Gill ");
}

function exc1(){
    //print numbers from 1 to 10, except 7
    for(var i = 1; i < 11; i++) {
        if(i !=7){
        
        console.log(i);
        }
    }

}

function exc2(){
    //print number from 20 to 1, except 7 and 13
    for (var i = 20; i>0; i--){
        if( i !=7 && i!=13){
            console.log(i);
        }
    }
}

console.log("Hello world");

sayHello();
exc1();
exc2();
 */

function homeWork(){
    var numbers = [23,45,23,56,2,-34,8,1,-12,2,123,9045,546,34,-123];

    // 1 find the smallest
    var smallest = numbers[0];
    for(var i=0; i  <numbers.length; i++){
        var n = numbers[i];
        if(n <smallest) smallest = n;
    }
    console.log("The Smallest", smallest);
    // 2 the biggest

    // 3 the sum of them all

    // 4 the multiplication of them all

    // 5 print non positive (lower than 0)

    // 6 print print the odd numbers
}



mathLib.funMath();

var res = mathLib.sum(21,21);
console.log(res);

var bigger = mathLib.greater(2,5);
console.log("biggest:", bigger);

var smaller = mathLib.smaller(0,-1);
console.log(smaller);

var r1=mathLib.division(9,3);
console.log(r1);

var r2=mathLib.division(5,0);
console.log(r2);

var even=mathLib.isEven(10);
console.log(even);

var even=mathLib.isEven(73);
console.log(even);

homeWork();

///CMDER