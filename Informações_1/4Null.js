var vazio = null;
var ind;
var res = (vazio == ind);
var res1 = (vazio === ind);
/*
Quando executado a variável res terá o valor true e res1 terá o valor false. E se tentarmos imprimir a variável vazio, teremos null impresso.

Assim, para efeito de comparação, undefined e null são iguais, mas não idênticos.
*/

console.log(vazio);
console.log(ind);
console.log(res);
console.log(res1); 