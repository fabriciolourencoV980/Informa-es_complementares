//Uma variável do tipo booleano pode assumir apenas dois valores: true e false

var a = 14;
var b = 42;
var tr = (a == 14);
var f1 = (a == b);

//Neste caso tr irá conter o valor true e f1 o valor false.

var int1 = tr + 1;
var int2 = f1 + 1;

//A variável int+1 irá conter o valor 2 (true + 1), pois o true é automaticamente convertido para 1 e int2 irá conter o valor 1

//(false + 1), pois o false é convertido para 0. 

console.log(a);
console.log(b);
console.log(tr);
console.log(f1);
console.log(int1);
console.log(int2);